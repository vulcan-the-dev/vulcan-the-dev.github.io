import { socialLinks } from "@/data/social";

export function Footer() {
	return (
		<footer className="border-t border-border/50 px-6 py-12 text-center text-sm text-muted">
			<nav aria-label="Social links">
				<ul className="flex items-center justify-center gap-6">
					{socialLinks.map((link) => (
						<li key={link.platform}>
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label ?? link.platform}
								className="transition-colors hover:text-accent"
							>
								{link.platform}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<p className="mt-4">
				&copy; {new Date().getFullYear()} Vulcan. No light mode. No compromises.
			</p>
		</footer>
	);
}
