import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone"
};

export default withNextVideo(nextConfig);