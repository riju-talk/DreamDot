"use client"

import * as React from "react"
import { DatabaseErrorFallback } from "./database-error-fallback"

interface DatabaseErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface DatabaseErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

// Generic error boundary for database-related errors
export class DatabaseErrorBoundary extends React.Component<
  DatabaseErrorBoundaryProps,
  DatabaseErrorBoundaryState
> {
  constructor(props: DatabaseErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): DatabaseErrorBoundaryState {
    // Only catch database-related errors
    const isDatabaseError =
      error.message.includes("PrismaClientInitializationError") ||
      error.message.includes("connection") ||
      error.message.includes("datasource") ||
      error.message.includes("database") ||
      error.name.includes("Database")

    if (isDatabaseError) {
      return { hasError: true, error }
    }

    // Re-throw non-database errors
    throw error
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Database Error Boundary caught an error:", error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DatabaseErrorFallback
      return (
        <FallbackComponent
          error={this.state.error}
          retry={this.retry}
        />
      )
    }

    return this.props.children
  }
}

// Hook for using database error boundary in functional components
export function useDatabaseErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  const resetError = React.useCallback(() => {
    setError(null)
  }, [])

  const handleError = React.useCallback((error: Error) => {
    setError(error)
  }, [])

  React.useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return { handleError, resetError, hasError: !!error }
}

// HOC for wrapping components with database error boundary
export function withDatabaseErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallbackProps?: Partial<React.ComponentProps<typeof DatabaseErrorFallback>>
) {
  const WrappedComponent = (props: P) => (
    <DatabaseErrorBoundary>
      <Component {...props} />
    </DatabaseErrorBoundary>
  )

  WrappedComponent.displayName = `withDatabaseErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}
