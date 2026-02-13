import { projects } from "@/data/projects";

export default function Projects() {
	return (
		<section id="projects" className="mx-auto max-w-3xl px-6 py-24">
			<h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>

			<div className="mt-10 grid gap-6 sm:grid-cols-2">
				{projects.map((project) => (
					<a
						key={project.name}
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/50"
					>
						<h3 className="text-lg font-semibold text-text group-hover:text-accent">
							{project.name}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-muted">
							{project.description}
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted"
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
