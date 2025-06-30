import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaCog, FaSignOutAlt, FaUserCircle, FaLock, FaTimes, FaEye, FaTrashAlt, FaSyncAlt, FaShieldAlt } from "react-icons/fa"
import { Save, History } from "lucide-react"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChangePassword } from "../../../components/change-passoword";
import { DeleteAccount } from "../../../components/delete-account";

export default function ProfilePage() {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                    <TopNav />
                    <main className="flex-1 container mx-auto px-4 py-6">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Account Settings</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Sidebar Navigation */}
                            <div className="lg:col-span-1">
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                                                JS
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">John Smith</h3>
                                                <p className="text-xs text-gray-500">john@example.com</p>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="px-0 pb-0">
                                        <div className="mt-4 pt-3 border-t">
                                            <Button variant="ghost" className="w-full justify-start gap-3 pl-6 py-5 text-gray-600 hover:bg-gray-100">
                                                <FaCog className="w-4" />
                                                <span>Advanced Settings</span>
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start gap-3 pl-6 py-5 text-red-600 hover:bg-red-50">
                                                <FaSignOutAlt className="w-4" />
                                                <span>Sign Out</span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-3 space-y-6">
                                {/* Account Settings Card */}
                                <Card>
                                    <CardHeader>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <CardTitle>Account Information</CardTitle>
                                                <CardDescription>Manage your account details and preferences</CardDescription>
                                            </div>
                                            <div className="mt-3 sm:mt-0">
                                                <Button variant="outline">
                                                    <History className="mr-2" />
                                                    View History
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="username" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Username
                                                </Label>
                                                <Input id="username" defaultValue="johnsmith" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="displayName" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Display Name
                                                </Label>
                                                <Input id="displayName" defaultValue="John Smith" />
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="bio" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Bio
                                                </Label>
                                                <Textarea
                                                    id="bio"
                                                    className="min-h-[100px]"
                                                    defaultValue="Product designer and frontend developer passionate about creating beautiful interfaces."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="dob" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Date of Birth
                                                </Label>
                                                <Input id="dob" type="date" defaultValue="1990-05-15" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="country" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Country
                                                </Label>
                                                <Select defaultValue="canada">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="us">United States</SelectItem>
                                                        <SelectItem value="canada">Canada</SelectItem>
                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                        <SelectItem value="australia">Australia</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="avatarUrl" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Avatar URL
                                                </Label>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                                        JS
                                                    </div>
                                                    <Input
                                                        id="avatarUrl"
                                                        defaultValue="https://example.com/avatar.jpg"
                                                        className="flex-1"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="bannerUrl" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Banner URL
                                                </Label>
                                                <Input
                                                    id="bannerUrl"
                                                    defaultValue="https://example.com/banner.jpg"
                                                />
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="website" className="flex items-center gap-1">
                                                    <FaUserCircle className="text-gray-500" />
                                                    Website
                                                </Label>
                                                <Input
                                                    id="website"
                                                    type="url"
                                                    defaultValue="https://johnsmith.design"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex justify-end gap-3">
                                        <Button variant="outline">
                                            <FaTimes className="mr-2" />
                                            Cancel
                                        </Button>
                                        <Button>
                                            <Save className="mr-2" />
                                            Save Changes
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Change Password Card */}
                                <ChangePassword />

                                {/* Delete Account Card */}
                                <DeleteAccount />
                            </div>
                        </div>
                    </main>
                    <MobileNav />
                </div>
            </div>
        </SidebarProvider>
    )
}
