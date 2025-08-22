import { useState } from "react";
import { useI18n } from "../i18n";

function Navbar() {
  const { locale, setLocale, messages } = useI18n();
  const next = locale === "es" ? "en" : "es";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-black/60 backdrop-blur p-4 top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-white text-lg font-bold">
          <img src="/logo.svg" alt="logo" className="w-9 h-9 text-shadow-violet-400" />
        </a>
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white transition">
                {messages.about_title}
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-white transition">
                {messages.projects}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white transition">
                {messages.contact}
              </a>
            </li>
          </ul>
          <button
            onClick={() => setLocale(next)}
            className="rounded-md border border-white/20 px-2 py-1 text-xs text-white hover:bg-white/10 transition"
            aria-label="Cambiar idioma"
          >
            {next.toUpperCase()}
          </button>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <img src="/icon-close.svg" alt="Cerrar menú" className="h-6 w-6 text-white" />
          ) : (
            <img src="/icon-menu.svg" alt="Abrir menú" className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      <div
        className={`md:hidden mx-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur p-6">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {messages.about_title}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {messages.projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {messages.contact}
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              setLocale(next);
              setIsOpen(false);
            }}
            className="mt-4 w-full rounded-md border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
            aria-label="Cambiar idioma"
          >
            {next.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
