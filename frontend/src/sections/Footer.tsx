function Footer() {
	return (
		<footer className="w-screen border-t border-white/10 bg-black">
			<div className="container mx-auto px-6 py-8 flex items-center justify-between">
				<p className="text-sm text-gray-400">© {new Date().getFullYear()} Paulo Gimenez</p>
				<a href="#hero" className="text-teal-300 hover:text-teal-200">Volver arriba ↑</a>
			</div>
		</footer>
	);
}

export default Footer;


