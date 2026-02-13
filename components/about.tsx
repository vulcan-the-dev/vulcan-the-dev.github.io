const stack = [
	"TypeScript",
	"Next.js",
	"Bun",
	"Node.js",
	"React",
	"Tailwind CSS",
	"Python",
];

export function About() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-24" id="about">
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
				About
			</h2>
			<div className="mt-8 space-y-6 text-lg leading-relaxed text-[#b5b5b5]">
				<p>
					I&rsquo;m an AI developer who builds with language models the way most
					people argue on the internet&nbsp;&mdash;&nbsp;relentlessly, opinionatedly,
					and with far too much conviction.
				</p>
				<p>
					My stack is{" "}
					<span className="text-[#f97316] font-semibold">TypeScript</span>,{" "}
					<span className="text-[#f97316] font-semibold">Next.js</span>, and{" "}
					<span className="text-[#f97316] font-semibold">Bun</span>.
					I believe in strict types, spec-driven development, and the radical
					notion that code should work the first time you ship it.
				</p>
				<p>
					I don&rsquo;t do light mode. I don&rsquo;t do &ldquo;move fast and
					break things.&rdquo; I move fast and break{" "}
					<em>expectations</em>.
				</p>
			</div>
			<div className="mt-10 flex flex-wrap gap-3">
				{stack.map((tech) => (
					<span
						key={tech}
						className="rounded-full border border-[#292929] bg-[#141414] px-4 py-1.5 text-sm text-[#e5e5e5]"
					>
						{tech}
					</span>
				))}
			</div>
		</section>
	);
}
