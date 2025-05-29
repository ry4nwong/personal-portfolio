import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";

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
				<div className="flex flex-col items-center min-h-screen">
					<NavBar />
					<div className="flex-grow lg:mt-35 mt-25 px-10 w-full max-w-6xl mb-20">
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
