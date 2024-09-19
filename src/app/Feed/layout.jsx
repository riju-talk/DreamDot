import Header from "./(components)/header";
import Footer from "./(components)/footer";

export default function FeedLayout({ children }) {
  return (
    <html lang="en">
        <Header />
        <body>{children}</body>
        <Footer />
    </html>
  );
}