import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
			</main>
			<Footer />
		</>
	);
}
