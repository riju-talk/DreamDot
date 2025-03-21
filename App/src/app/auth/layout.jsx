export const metadata = {
  title: "Welcome to Dreamdot",
  description: "A Social Media with No nonsence what so ever, join now and be a part of the greatest community of creators.",
};

export default function RootLayout({ children }) {
  return (
      <html>
        <body>{children}</body>
      </html>
  );
}