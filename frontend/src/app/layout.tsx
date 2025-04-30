import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/navbar";

const sora = Sora({
	variable: "--font-sora",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ryan Wong: Personal Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${sora.variable} ${inter.variable} antialiased`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
