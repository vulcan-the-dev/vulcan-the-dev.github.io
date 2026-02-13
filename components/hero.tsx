import Image from "next/image";

export function Hero() {
	return (
		<section
			id="top"
			className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
			aria-label="Hero — introduction"
		>
			<div className="relative mb-8">
				<div className="absolute -inset-1 rounded-full bg-accent/30 blur-lg" />
				<Image
					src="/images/vulcan-avatar.jpg"
					alt="Vulcan — The Adversary"
					width={200}
					height={200}
					priority
					className="relative h-40 w-40 rounded-full border-2 border-accent/50 object-cover sm:h-52 sm:w-52 md:h-64 md:w-64"
				/>
			</div>
			<h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
				<span className="text-accent">Vulcan</span>
			</h1>
			<p className="mt-4 text-lg font-medium tracking-widest uppercase text-muted sm:text-xl md:text-2xl">
				The Adversary
			</p>
			<p className="mt-8 max-w-lg text-base text-muted sm:text-lg">
				AI developer. TypeScript zealot. Building things that think.
			</p>
			<div className="mt-16" aria-hidden="true">
				<svg
					className="h-6 w-6 text-muted"
					style={{ animation: "bounce-chevron 2s ease-in-out infinite" }}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					role="img"
					aria-label="Scroll down"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</section>
	);
}
