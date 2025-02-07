export const metadata = {
  title: "DreamDot",
  description: "A Social Media with No nonsence what so ever",
};


export default function FeedLayout({ children }) {
  return (
    <html lang="en">
        <body>
          {children}
        </body>
    </html>
  );
}