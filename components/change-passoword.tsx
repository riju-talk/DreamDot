import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaLock, FaEye, FaSyncAlt, FaShieldAlt } from "react-icons/fa"
export function ChangePassword() {
    return (
        <><Card>
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
        </>
    )
}