import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterPage } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
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
				<FooterPage />
			</body>
		</html>
	);
}
