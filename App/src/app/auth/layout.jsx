import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <Head>
          <title>Auth Page</title>
          <meta name="description" content="Authentication" />
        </Head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}