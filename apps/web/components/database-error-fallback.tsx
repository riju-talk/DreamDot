"use client"

import * as React from "react"
import { AlertTriangle, RefreshCw, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DatabaseErrorFallbackProps {
  error?: Error
  component?: string
  onRetry?: () => void
  showDebugInfo?: boolean
}

export function DatabaseErrorFallback({
  error,
  component = "Feed",
  onRetry,
  showDebugInfo = false
}: DatabaseErrorFallbackProps) {
  const isConnectionError = error?.message?.includes("PrismaClientInitializationError") ||
                           error?.message?.includes("connection") ||
                           error?.message?.includes("datasource")

  return (
    <Card className="border-destructive/50 bg-destructive/5">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
            {isConnectionError ? (
              <Database className="h-5 w-5 text-destructive" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-destructive" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">
              {isConnectionError ? "Database Connection Error" : "Something went wrong"}
            </CardTitle>
            <CardDescription className="mt-1">
              {isConnectionError
                ? "Unable to connect to the database. Please check your connection."
                : "An unexpected error occurred while loading content."
              }
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          {onRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRetry}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh Page
          </Button>
        </div>

        {showDebugInfo && error && (
          <details className="mt-3">
            <summary className="cursor-pointer text-sm font-medium mb-2">
              Debug Information
            </summary>
            <div className="rounded-md bg-muted p-3">
              <pre className="text-xs text-muted-foreground overflow-x-auto">
                {error.message}
              </pre>
            </div>
          </details>
        )}
      </CardContent>
    </Card>
  )
}
