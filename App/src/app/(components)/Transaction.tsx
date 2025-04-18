"use server";

import { prismaUser, prismaItems } from "../../lib/db/client";

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
    if (typeof amount !== "number") {
      throw new Error("Invalid transaction amount type.");
    }

    // Retrieve buyer's record
    const buyer = await prismaUser.users.findUnique({
      where: { id: buyer_id },
    });
    if (!buyer) {
      throw new Error("Buyer not found.");
    }

    // Retrieve the item
    const item = await prismaItems.items.findUnique({
      where: { item_id },
    });
    if (!item) {
      throw new Error("Item not found.");
    }
    if (item.user_id !== creator_id) {
      throw new Error("Creator does not own the item.");
    }

    // For free items (price = 0), allow amount = 0 and skip balance/price checks
    if (item.price && parseFloat(item.price.toString()) === 0) {
      if (amount !== 0) {
        throw new Error("Amount must be 0 for free items.");
      }
    } else {
      // For paid items, validate amount and balance
      if (amount <= 0) {
        throw new Error("Amount must be greater than 0 for paid items.");
      }
      if (buyer.intitial_balance < amount) {
        throw new Error("Insufficient balance.");
      }
      if (
        item.price &&
        parseFloat(item.price.toString()) !== parseFloat(amount.toString())
      ) {
        throw new Error("Transaction amount does not match item price.");
      }
    }

    // Update balances in a transaction (skip for free items)
    const [updatedBuyer, updatedCreator, transactionRecord, updatedItemOwnership] = await prismaUser.$transaction([
      prismaUser.users.update({
        where: { id: buyer_id },
        data: { intitial_balance: { decrement: amount } },
      }),
      prismaUser.users.update({
        where: { id: creator_id },
        data: { intitial_balance: { increment: amount } },
      }),
      // Create transaction record
      prismaItems.transactions.create({
        data: {
          buyer_id,
          item_id,
          amount,
          payment_status: "completed",
          transaction_date: new Date(),
        },
      }),
      // Transfer ownership
      prismaItems.item_ownership.create({
        data: {
          item_id,
          creator_id,
          customer_id: buyer_id,
        },
      }),
    ]);

    // Update collection (use amount for consistency, 0 for free items)
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
        amount: transactionRecord.amount.toNumber?.() ?? transactionRecord.amount,
      },
      updatedItem: updatedItemOwnership,
      updatedCollection,
    };
  } catch (error: unknown) {
    console.error("Transaction error:", error);
    if (error instanceof Error) {
      throw new Error(error.message || "Transaction failed.");
    } else {
      throw new Error("Transaction failed.");
    }
  }
}