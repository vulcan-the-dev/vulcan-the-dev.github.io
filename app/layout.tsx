import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
	variable: "--font-geist",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geist.variable} ${geistMono.variable} font-[family-name:var(--font-geist)] bg-background text-text antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
