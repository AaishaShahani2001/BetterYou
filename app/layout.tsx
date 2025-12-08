import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BetterYou - Mental Wellness & Counseling",
  description: "A safe and confidential space to improve your mental well-being. Book private counseling and explore self-care tips.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-bg text-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
