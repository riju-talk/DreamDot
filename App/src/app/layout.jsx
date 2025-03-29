import { UserProvider } from "./user_context";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DreamDot",
  description: "A Social Media with No nonsence what so ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=auto_stories" />
        <UserProvider>
        {children}
        </UserProvider>
        </body>
    </html>
  );
}
