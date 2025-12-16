import { useI18n } from "../i18n";
import TiltCard from "../utils/TiltCard";
import { demoProjects } from "../utils/constants";


function Projects() {
	const { messages, locale } = useI18n();
	return (
		<section id="projects" className="relative w-screen py-24 bg-gradient-to-b from-black via-gray-900 to-black">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-extrabold text-white tracking-tight opacity-0 animate-fadein-100">
					{messages.projects}
				</h2>
				<p className="mt-3 text-lg text-gray-400 opacity-0 animate-fadein-200">
					{messages.explore_projects}
				</p>
				<div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{demoProjects.map((p, idx) => (
						<article
							key={p.id}
							className="opacity-0 animate-fadein-200"
							style={{ animationDelay: `${0.08 * idx}s` }}
						>
							<TiltCard className="group rounded-2xl bg-gray-900/70 p-0 ring-1 ring-white/10 shadow-xl hover:ring-teal-400/40 transition overflow-hidden flex flex-col h-full">
								{p.image && (
									<div className="h-40 w-full overflow-hidden">
										<img
											src={p.image}
											alt={typeof p.title === 'string' ? p.title : p.title[locale]}
											className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
											loading="lazy"
										/>
									</div>
								)}
								<div className="flex-1 flex flex-col p-6">
									<h3 className="text-2xl font-bold text-white mb-2">
										{typeof p.title === 'string' ? p.title : p.title[locale]}
									</h3>
									<p className="text-gray-300 text-base mb-4">
										{typeof p.description === 'string' ? p.description : p.description[locale]}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{p.techs.map((tech) => (
											<span key={tech} className="bg-teal-700/20 text-teal-300 px-3 py-1 rounded-full text-xs font-medium border border-teal-700/40">
												{tech}
											</span>
										))}
									</div>
									<div className="mt-auto">
										{p.link && (
											<a
												href={p.link}
												className="inline-block px-5 py-2 rounded-md bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition text-sm"
												target="_blank"
												rel="noopener noreferrer"
											>
												{messages.cta_view_projects} →
											</a>
										)}
									</div>
								</div>
							</TiltCard>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;


