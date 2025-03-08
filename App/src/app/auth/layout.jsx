export const metadata = {
  title: "Welcome to Dreamdot",
  description: "A Social Media with No nonsence what so ever",
};

export default function RootLayout({ children }) {
  return (
      <html>
        <body>{children}</body>
      </html>
  );
}