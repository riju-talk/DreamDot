import { NextRequest, NextResponse } from "next/server"
import { prismaUser, prismaSocial, prismaItem } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    // Test each database connection
    const results = await Promise.allSettled([
      prismaUser.$queryRaw`SELECT 1`,
      prismaSocial.$queryRaw`SELECT 1`,
      prismaItem.$queryRaw`SELECT 1`,
    ])

    const status = {
      user: results[0].status === "fulfilled" ? "connected" : "error",
      social: results[1].status === "fulfilled" ? "connected" : "error",
      items: results[2].status === "fulfilled" ? "connected" : "error",
      timestamp: new Date().toISOString(),
      errors: results
        .filter(r => r.status === "rejected")
        .map((r, i) => ({
          database: ["user", "social", "items"][i],
          error: r.status === "rejected" ? r.reason?.message : null
        }))
    }

    const hasErrors = status.errors.length > 0

    return NextResponse.json(
      {
        status: hasErrors ? "error" : "healthy",
        message: hasErrors ? "Some database connections failed" : "All databases connected successfully",
        ...status
      },
      { status: hasErrors ? 500 : 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Health check failed",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
