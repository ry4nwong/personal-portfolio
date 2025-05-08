import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/nav/NavBar";

const sora = Sora({
	subsets: ["latin"],
	display: "swap",
});

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
			<body className={`${sora.className} ${inter.className} antialiased`}>
				<div className="">
					<NavBar />
					{children}
				</div>
			</body>
		</html>
	);
}
