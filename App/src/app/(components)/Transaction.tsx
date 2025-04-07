"use server";

import { prismaUser, prismaItems } from "../../lib/db/client"; // Adjust the path accordingly

export default async function ProcessTransaction({
  buyer_id,
  creator_id,
  item_id,
  amount,
}: {
  buyer_id: string;
  creator_id: string;
  item_id: string;
  amount: number;
}) {
  try {
    // Validate amount
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Invalid transaction amount.");
    }

    // Retrieve buyer's record from user_d
    const buyer = await prismaUser.users.findUnique({
      where: { id: buyer_id },
    });
    if (!buyer) {

      throw new Error("Buyer not found.");
    }
    if (buyer.intitial_balance < amount) {
      throw new Error("Insufficient balance.");
    }

    // Retrieve the item to verify ownership and price
    const item = await prismaItems.items.findUnique({
      where: { item_id },
    });
    if (!item) {
      throw new Error("Item not found.");
    }
    if (item.user_id !== creator_id) {
      throw new Error("Creator does not own the item.");
    }
    if (item.price && parseFloat(item.price.toString()) !== parseFloat(amount.toString())) {
      throw new Error("Transaction amount does not match item price.");
    }

    // Update buyer and creator balance using a transaction
    const [updatedBuyer, updatedCreator] = await prismaUser.$transaction([
      prismaUser.users.update({
        where: { id: buyer_id },
        data: { intitial_balance: { decrement: amount } },
      }),
      prismaUser.users.update({
        where: { id: creator_id },
        data: { intitial_balance: { increment: amount } },
      }),
    ]);

    // Create a new transaction record in the items_d schema
    const transactionRecord = await prismaItems.transactions.create({
      data: {
        buyer_id,
        item_id,
        amount,
        payment_status: "completed",
        transaction_date: new Date(), // Explicitly set transaction date
      },
    });

    // Transfer ownership by updating the item with the new buyer_id
    const updatedItem = await prismaItems.item_ownership.create({
      data: {
      item_id,
      creator_id,
      customer_id: buyer_id, // Transfer ownership to buyer
      },
    });

    const updatedCollection = await prismaItems.collections.updateMany({
      where: { user_id: creator_id },
      data: {
        collection: { increment: amount },
      },
    });
    

    return {
      success: true,
      transaction: {
        ...transactionRecord,
        amount: transactionRecord.amount.toNumber(), // Fix here
      },
      updatedItem,
      updatedCollection
    };
  } catch (error) {
    console.error("Transaction error:", error);
    throw new Error(error.message || "Transaction failed.");
  }
}