import Header from "../(components)/header";
import Footer from "../(components)/footer";


export default function FeedLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <Header />
          {children}
        <Footer /> 
        </body>
    </html>
  );
}