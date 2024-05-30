import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const roboto = Roboto({ subsets: ["latin"], weight: '500' });

export const metadata: Metadata = {
  title: "ICR",
  description: "Igreja Cristã Rhema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
				<Navbar />
				{children}
			</body>
    </html>
  );
}
