export default function Footer() {
	return (
		<footer className="border-t border-white/10 px-6 py-12 text-center text-sm text-muted">
			<a
				href="https://github.com/vulcan-the-dev"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-colors hover:text-accent"
			>
				GitHub
			</a>
			<p className="mt-4">© {new Date().getFullYear()} Vulcan</p>
		</footer>
	);
}
