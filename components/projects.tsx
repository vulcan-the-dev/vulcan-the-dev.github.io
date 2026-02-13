import { projects } from "@/data/projects";

export function Projects() {
	if (projects.length === 0) {
		return null;
	}

	return (
		<section
			className="mx-auto max-w-3xl px-6 py-24"
			id="projects"
			aria-label="Projects"
		>
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
						aria-label={`${project.name} — ${project.description}`}
						className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
					>
						<h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
							{project.name}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-muted">
							{project.description}
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-bg px-3 py-1 text-xs text-muted"
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
