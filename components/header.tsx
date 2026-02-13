import { navigation } from "@/data/navigation";

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-md">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
				aria-label="Main navigation"
			>
				<a
					href="#top"
					className="text-sm font-bold tracking-tight text-text transition-colors hover:text-accent sm:text-base"
				>
					Vulcan
				</a>
				<ul className="flex items-center gap-4 sm:gap-6">
					{navigation.map((item) => {
						const isExternal = item.href.startsWith("http");
						return (
							<li key={item.href}>
								<a
									href={item.href}
									className="text-xs font-medium text-muted transition-colors hover:text-accent sm:text-sm"
									{...(isExternal
										? {
												target: "_blank",
												rel: "noopener noreferrer",
											}
										: {})}
								>
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
