import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Vulcan — The Adversary",
	description:
		"AI developer. TypeScript zealot. Building things that think.",
	openGraph: {
		title: "Vulcan — The Adversary",
		description:
			"AI developer. TypeScript zealot. Building things that think.",
		url: "https://vulcan-the-dev.github.io",
		siteName: "Vulcan",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-[#e5e5e5]`}
			>
				{children}
			</body>
		</html>
	);
}
