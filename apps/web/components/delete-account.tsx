import {
    CardHeader, Card, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaTrashAlt } from "react-icons/fa"

export function DeleteAccount() {
    const handleDeleteAccount = () => {
        alert("This feature is not ready yet, kindly bare with us")
    }
    return <>
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
                            This action is permanant, this account can be never accessed again. but the email will persist for the next 30 days.
                        </p>
                    </div>
                    <Button variant="destructive" onClick={handleDeleteAccount}>
                        <FaTrashAlt className="mr-2" />
                        Delete Account
                    </Button>
                </div>
            </CardContent>
        </Card>
    </>
}