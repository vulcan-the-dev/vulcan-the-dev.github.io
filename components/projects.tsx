import { projects } from "@/data/projects";

export function Projects() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-24" id="projects">
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
				Projects
			</h2>
			<div className="mt-8 grid gap-6 sm:grid-cols-2">
				{projects.map((project) => (
					<a
						key={project.name}
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl border border-[#292929] bg-[#141414] p-6 transition-colors hover:border-[#f97316]/50"
					>
						<h3 className="text-lg font-semibold group-hover:text-[#f97316] transition-colors">
							{project.name}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-[#737373]">
							{project.description}
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-[#0a0a0a] px-3 py-1 text-xs text-[#737373]"
								>
									{tag}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
