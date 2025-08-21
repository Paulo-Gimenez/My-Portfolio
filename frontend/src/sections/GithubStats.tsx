function GithubStats() {
	const username = "Paulo-Gimenez";
	const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`;

	return (
		<section id="github-stats" className="relative w-screen py-16 bg-[#0a0f1c]">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-white">GitHub Stats</h2>
				<div className="mt-6">
					<a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="inline-block">
						<img src={statsUrl} alt="GitHub stats" loading="lazy" className="rounded-xl ring-1 ring-white/10" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default GithubStats;


