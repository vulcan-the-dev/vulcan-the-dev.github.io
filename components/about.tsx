const stack = ["TypeScript", "Next.js", "Bun", "Tailwind CSS", "Node.js"];

export default function About() {
	return (
		<section id="about" className="mx-auto max-w-3xl px-6 py-24">
			<h2 className="text-3xl font-bold sm:text-4xl">About</h2>

			<div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
				<p>
					I build AI-powered tools and opinionated software. The kind of
					developer who reads the spec before writing a single line — then
					rewrites the spec because it was wrong.
				</p>
				<p>
					TypeScript is the only language I trust. Everything else is a
					suggestion. I work with{" "}
					<span className="text-text">Next.js</span>,{" "}
					<span className="text-text">Bun</span>, and whatever else gets
					the job done without getting in the way.
				</p>
				<p>
					Sharp opinions, dark humour, zero tolerance for unnecessary
					complexity. If your abstraction needs an abstraction, we have a
					problem.
				</p>
			</div>

			<div className="mt-10 flex flex-wrap gap-3">
				{stack.map((tech) => (
					<span
						key={tech}
						className="rounded-full border border-white/10 bg-surface px-4 py-1.5 text-sm text-text"
					>
						{tech}
					</span>
				))}
			</div>
		</section>
	);
}
