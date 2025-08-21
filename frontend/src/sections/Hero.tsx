import Navbar from "../components/Nav-bar";
import { useI18n } from "../i18n";
import { useEffect, useRef, useState } from "react";

function Hero() {
	const ref = useRef<HTMLDivElement>(null);
	const [y, setY] = useState(0);
	const [showGlow, setShowGlow] = useState(true);

	useEffect(() => {
		const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) return;
		function onScroll() {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const progress = Math.min(Math.max((0 - rect.top) / Math.max(rect.height, 1), 0), 1);
			setY(-progress * 20);
			setShowGlow(progress < 0.1);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header id="hero" ref={ref} className="relative min-h-screen w-screen overflow-hidden bg-[url('/blob-scene-haikei.svg')] bg-no-repeat bg-cover bg-center">
			<div aria-hidden className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl animate-orb1" />
			<div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-orb2" />

			<Navbar />
			<div style={{ transform: `translateY(${y}vh)` }} className="container mx-auto flex flex-col items-center justify-center h-screen px-6 text-center transition-transform duration-300 will-change-transform">
				<p className="text-sm tracking-widest text-teal-300 uppercase opacity-0 animate-fadein-100">{useI18n().messages.salutation}</p>
				<h1 className="mt-4 text-5xl font-extrabold text-white sm:text-7xl opacity-0 animate-fadein-200">
					<span className="block">Paulo Gimenez</span>
					<span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">{useI18n().messages.role}</span>
				</h1>
				<p className="mt-6 max-w-2xl text-gray-300 opacity-0 animate-fadein-300">
				{useI18n().messages.description}
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-4 opacity-0 animate-fadein-400">
					<a href="#projects" className="rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">{useI18n().messages.cta_view_projects}</a>
					<a href="#contact" className="rounded-md border border-teal-400 px-5 py-3 text-sm font-semibold text-teal-300 hover:bg-teal-500/10">{useI18n().messages.cta_contact}</a>
				</div>
			</div>
			{showGlow && (
				<div aria-hidden className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 h-40 w-80 rounded-full bg-teal-500/20 blur-3xl transition-opacity duration-500 opacity-100" />
			)}
			<div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0b1220]" />
		</header>
	);
}

export default Hero;


