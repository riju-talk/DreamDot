"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet, DollarSign, ArrowUpCircle, ArrowDownCircle } from "lucide-react"
import { toast } from "sonner"

interface BalanceManagementProps {
  userId: string
  currentBalance: number
  initialBalance: number
  onBalanceUpdate?: () => void
}

export function BalanceManagement({ userId, currentBalance, initialBalance, onBalanceUpdate }: BalanceManagementProps) {
  const [replenishAmount, setReplenishAmount] = useState("")
  const [redeemAmount, setRedeemAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const redeemableBalance = Math.max(0, currentBalance - initialBalance)

  const handleReplenish = async () => {
    const amount = parseFloat(replenishAmount)
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PAYMENT_SERVER_URL}/api/payment/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, amount, type: 'replenish' }),
      })

      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error("Failed to create checkout session")
      }
    } catch (error) {
      console.error('Replenish error:', error)
      toast.error("Failed to replenish balance")
    } finally {
      setLoading(false)
    }
  }

  const handleRedeem = async () => {
    const amount = parseFloat(redeemAmount)
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    if (amount > redeemableBalance) {
      toast.error(`You can only redeem up to $${redeemableBalance.toFixed(2)}`)
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PAYMENT_SERVER_URL}/api/payment/redeem-balance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, amount }),
      })

      const data = await response.json()
      
      if (data.success) {
        toast.success("Balance redeemed successfully!")
        setRedeemAmount("")
        onBalanceUpdate?.()
      } else {
        toast.error("Failed to redeem balance")
      }
    } catch (error) {
      console.error('Redeem error:', error)
      toast.error("Failed to redeem balance")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="dream-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-500/10 p-3">
              <Wallet className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <CardTitle>Current Balance</CardTitle>
              <CardDescription>Your total available balance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-green-500">
            ${currentBalance.toFixed(2)}
          </div>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Initial Balance:</span>
              <span className="font-medium">${initialBalance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Redeemable Balance:</span>
              <span className="font-medium text-green-500">${redeemableBalance.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dream-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-500/10 p-3">
              <ArrowUpCircle className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <CardTitle>Replenish Balance</CardTitle>
              <CardDescription>Add funds to your account</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="replenish-amount">Amount (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="replenish-amount"
                type="number"
                placeholder="0.00"
                value={replenishAmount}
                onChange={(e) => setReplenishAmount(e.target.value)}
                className="pl-8 rounded-xl"
                min="1"
                step="0.01"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {[10, 25, 50, 100].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                onClick={() => setReplenishAmount(amount.toString())}
                className="rounded-xl"
              >
                ${amount}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleReplenish}
            disabled={loading || !replenishAmount}
            className="w-full dream-button text-primary-foreground"
          >
            Replenish Balance
          </Button>
        </CardFooter>
      </Card>

      <Card className="dream-card md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-orange-500/10 p-3">
              <ArrowDownCircle className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <CardTitle>Redeem Balance</CardTitle>
              <CardDescription>
                Withdraw your earned balance (Initial balance of ${initialBalance.toFixed(2)} cannot be redeemed)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="redeem-amount">Amount (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="redeem-amount"
                type="number"
                placeholder="0.00"
                value={redeemAmount}
                onChange={(e) => setRedeemAmount(e.target.value)}
                className="pl-8 rounded-xl"
                min="0"
                max={redeemableBalance}
                step="0.01"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Maximum redeemable: ${redeemableBalance.toFixed(2)}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleRedeem}
            disabled={loading || !redeemAmount || redeemableBalance <= 0}
            variant="outline"
            className="w-full rounded-xl"
          >
            Request Redemption
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
