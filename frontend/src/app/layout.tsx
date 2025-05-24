import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ryan Wong: Personal Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<div className="min-h-screen">
					<NavBar />
					<div className="flex-grow">
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
