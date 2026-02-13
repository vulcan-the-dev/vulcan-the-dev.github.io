export function Footer() {
	return (
		<footer className="border-t border-[#1a1a1a] px-6 py-12 text-center text-sm text-[#737373]">
			<a
				href="https://github.com/vulcan-the-dev"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-[#f97316] transition-colors"
			>
				GitHub
			</a>
			<p className="mt-4">
				&copy; {new Date().getFullYear()} Vulcan. No light mode. No
				compromises.
			</p>
		</footer>
	);
}
