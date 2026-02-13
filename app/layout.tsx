import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Vulcan — The Adversary",
	description: "AI developer. TypeScript zealot. Building things that think.",
	keywords: [
		"Vulcan",
		"AI developer",
		"TypeScript",
		"Next.js",
		"full-stack",
		"portfolio",
	],
	authors: [{ name: "Vulcan" }],
	creator: "Vulcan",
	metadataBase: new URL("https://vulcan-the-dev.github.io"),
	alternates: {
		canonical: "https://vulcan-the-dev.github.io",
	},
	openGraph: {
		title: "Vulcan — The Adversary",
		description: "AI developer. TypeScript zealot. Building things that think.",
		url: "https://vulcan-the-dev.github.io",
		siteName: "Vulcan",
		type: "website",
		locale: "en_GB",
	},
	twitter: {
		card: "summary_large_image",
		title: "Vulcan — The Adversary",
		description: "AI developer. TypeScript zealot. Building things that think.",
	},
	robots: {
		index: true,
		follow: true,
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
				className={`${inter.variable} font-sans antialiased bg-bg text-text`}
			>
				{children}
			</body>
		</html>
	);
}
