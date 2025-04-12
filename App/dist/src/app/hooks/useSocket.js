import { useEffect, useState } from "react";
import { io } from "socket.io-client";
// Instead of hard-coding the URL
const SOCKET_URL = typeof window !== 'undefined' ? window.location.origin : '';
export const useSocket = () => {
    const [socket, setSocket] = useState(null);
    console.log("Socket URL:", SOCKET_URL);
    useEffect(() => {
        const socketInstance = io(SOCKET_URL, {
            path: "/api/socket_io" // Add this to match your server configuration
        });
        console.log("Socket Instance:", socketInstance);
        setSocket(socketInstance);
        return () => {
            socketInstance.disconnect();
        };
    }, []);
    return socket;
};
//# sourceMappingURL=useSocket.js.map