// const { createServer } = require("http");
// const next = require("next");
// const socketModule = require("./server/socket"); // Use require
import { createServer } from 'node:http';
import next from 'next';
import { initializeSocket } from './server/socket';
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = createServer((req, res) => {
        handle(req, res);
    });
    initializeSocket(server); // Correct usage
    server.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
});
//# sourceMappingURL=server.js.map