"use client"

import * as React from "react"

interface DatabaseConnectionStatus {
  isConnected: boolean
  error?: string
  timestamp: Date
}

export function useDatabaseStatus() {
  const [status, setStatus] = React.useState<DatabaseConnectionStatus>({
    isConnected: true,
    timestamp: new Date(),
  })

  const checkConnection = React.useCallback(async () => {
    try {
      // Try to make a simple database call
      const response = await fetch('/api/health/database', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setStatus({
          isConnected: true,
          timestamp: new Date(),
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        setStatus({
          isConnected: false,
          error: errorData.message || `HTTP ${response.status}`,
          timestamp: new Date(),
        })
      }
    } catch (error) {
      setStatus({
        isConnected: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date(),
      })
    }
  }, [])

  React.useEffect(() => {
    checkConnection()
    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000)
    return () => clearInterval(interval)
  }, [checkConnection])

  return { status, checkConnection }
}

// Simple health check API endpoint (you'll need to create this)
export async function checkDatabaseHealth(): Promise<{ ok: boolean; message?: string }> {
  try {
    const response = await fetch('/api/health/database')
    const data = await response.json()
    return { ok: response.ok, message: data.message }
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Connection failed'
    }
  }
}
