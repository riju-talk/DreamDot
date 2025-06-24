import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"

export default function WalletPage() {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                    <TopNav />
                    <main className="flex-1 container mx-auto px-4 py-6">
                        <div className="p-4">
                            <h1 className="text-2xl font-bold text-black mb-4">Wallet</h1>
                            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-4">
                                <p className="font-semibold">This feature is still in production.</p>
                                <p>Manage your earnings and transactions on DreamDot. Coming soon!</p>
                            </div>
                            <Card className="rounded-lg shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-black">Balance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Coming soon...</p>
                                </CardContent>
                            </Card>
                            <Card className="mt-4 rounded-lg shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-black">Transaction History</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Coming soon...</p>
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                    <MobileNav />
                </div>
            </div>
        </SidebarProvider>
    )
}