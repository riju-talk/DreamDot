import { useState } from "react";
import { Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function TransactionModal() {
    const [transactionComplete, setTransactionComplete] = useState(false);
    console.log(transactionComplete);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <Card className="w-96 p-6 bg-gray-800 text-white rounded-2xl shadow-lg">
                {!transactionComplete ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Confirm Purchase</h2>
                        <p className="text-gray-400">You're about to buy <strong>"Epic Game Item"</strong>.</p>
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total Price:</span>
                            <span>$19.99</span>
                        </div>
                        <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                            onClick={() => setTransactionComplete(true)}
                        >
                            Buy Now
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-4">
                        <CheckCircleOutlined className="w-12 h-12 text-green-500" />
                        <h2 className="text-xl font-bold">Transaction Complete</h2>
                        <p className="text-gray-400">Thank you for your purchase!</p>
                        <Button
                            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
                            onClick={() => setTransactionComplete(false)}
                        >
                            Close
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
}
