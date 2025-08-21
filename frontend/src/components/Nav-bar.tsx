import { useI18n } from "../i18n";

function Navbar() {
	const { locale, setLocale, messages } = useI18n();
	const next = locale === "es" ? "en" : "es";
	return (
		<nav className="fixed bg-black/60 backdrop-blur p-4 top-0 left-0 w-full shadow-md z-50">
			<div className="container mx-auto flex justify-between items-center">
				<a href="#hero" className="text-white text-lg font-bold">{messages.brand}</a>
				<div className="flex items-center gap-4">
					<ul className="flex space-x-4">
						<li>
							<a href="#about" className="text-gray-300 hover:text-white">{messages.about_title}</a>
						</li>
						<li>
							<a href="#projects" className="text-gray-300 hover:text-white">{messages.projects}</a>
						</li>
						<li>
							<a href="#contact" className="text-gray-300 hover:text-white">{messages.contact}</a>
						</li>
					</ul>
					<button onClick={() => setLocale(next)} className="rounded-md border border-white/20 px-2 py-1 text-xs text-white hover:bg-white/10" aria-label="Cambiar idioma">
						{locale.toUpperCase()}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
