import { useI18n } from "../i18n";
import TiltCard from "../utils/TiltCard";

type Project = {
	id: string;
	title: string;
	description: string;
	link?: string;
};

const demoProjects: Project[] = [
	{ id: "sled-hockey", title: "Sled Hockey", description: "Mini sitio informativo con animaciones.", link: "#" },
	{ id: "unity-game", title: "Juego en Unity", description: "Prototipo 3D con UI personalizada.", link: "#" },
	{ id: "web-dashboard", title: "Dashboard Web", description: "Panel analítico con gráficos y filtros.", link: "#" },
];

function Projects() {
	const { messages } = useI18n();
	return (
		<section id="projects" className="relative w-screen py-24 bg-black">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-white">{messages.projects}</h2>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{demoProjects.map((p, idx) => (
						<article key={p.id} className="opacity-0 animate-fadein-200" style={{ animationDelay: `${0.05 * idx}s` }}>
							<TiltCard className="rounded-xl bg-gray-900/60 p-5 ring-1 ring-white/10 transition hover:ring-teal-400/40">
								<h3 className="text-xl font-semibold text-white">{p.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{p.description}</p>
								{p.link && (
									<a href={p.link} className="mt-4 inline-block text-teal-300 hover:text-teal-200">Ver más →</a>
								)}
							</TiltCard>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;


