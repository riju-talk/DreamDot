import { TopNav } from "../../../components/top-nav"
import { MobileNav } from "../../../components/mobile-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../../components/app-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaSearch, FaBell, FaCog, FaSignOutAlt, FaUserCircle, FaLock, FaCreditCard, FaUsers, FaPlug, FaTimes, FaEye, FaTrashAlt, FaSyncAlt, FaShieldAlt} from "react-icons/fa"
import { Save, History } from "lucide-react"

import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem 
  } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
  
  


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
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password & Security</CardTitle>
                                        <CardDescription>Update your password and security settings</CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="currentPassword" className="flex items-center gap-1">
                                                    <FaLock className="text-gray-500" />
                                                    Current Password
                                                </Label>
                                                <div className="relative">
                                                    <Input
                                                        id="currentPassword"
                                                        type="password"
                                                        placeholder="Enter current password"
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <FaEye />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword" className="flex items-center gap-1">
                                                    <FaLock className="text-gray-500" />
                                                    New Password
                                                </Label>
                                                <div className="relative">
                                                    <Input
                                                        id="newPassword"
                                                        type="password"
                                                        placeholder="Enter new password"
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <FaEye />
                                                    </Button>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Must be at least 8 characters
                                                </p>
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="confirmPassword" className="flex items-center gap-1">
                                                    <FaLock className="text-gray-500" />
                                                    Confirm New Password
                                                </Label>
                                                <div className="relative">
                                                    <Input
                                                        id="confirmPassword"
                                                        type="password"
                                                        placeholder="Confirm new password"
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <FaEye />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t">
                                            <h3 className="font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-blue-50 p-4 rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                        <FaShieldAlt />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-800">2FA is disabled</p>
                                                        <p className="text-sm text-gray-600">
                                                            Add an extra layer of security to your account
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button variant="outline">
                                                    Enable
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex justify-end">
                                        <Button>
                                            <FaSyncAlt className="mr-2" />
                                            Update Password
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* Delete Account Card */}
                                <Card className="border-red-200">
                                    <CardHeader className="bg-red-50 border-b border-red-200">
                                        <CardTitle className="text-red-800">Danger Zone</CardTitle>
                                        <CardDescription className="text-red-600">
                                            Irreversible and destructive actions
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="font-medium text-gray-800">Delete Account</h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    Once you delete your account, there is no going back. Please be certain.
                                                </p>
                                            </div>
                                            <Button variant="destructive">
                                                <FaTrashAlt className="mr-2" />
                                                Delete Account
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </main>
                    <MobileNav />
                </div>
            </div>
        </SidebarProvider>
    )
}
