export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-primary">
      <div className="text-center space-y-4">
        <p className="text-lg font-semibold animate-pulse">Loading MarketPlace...</p>
        <div className="flex justify-center space-x-2">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
