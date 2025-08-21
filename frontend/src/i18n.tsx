import React, { createContext, useContext, useMemo, useState } from "react";

export type Locale = "es" | "en";

type Messages = Record<string, string>;

const es: Messages = {
	brand: "Paulo Gimenez",
	cta_view_projects: "Ver proyectos",
	cta_contact: "Contactar",
	salutation: "¡HOLA!, yo soy",
	role: "Desarrollador Web",
	about_title: "Sobre mí",
	currently: "Actualmente",
	active_projects: "Proyectos activos",
	main_stack: "Stack principal",
	explore_projects: "Explorar proyectos",
	contact: "Contacto",
	projects: "Proyectos",
	description: "Creo experiencias digitales con React, TypeScript y Vite, combinando desarrollo, diseño y accesibilidad para lograr soluciones modernas y de alto rendimiento.",
	about_me:"Diseño interfaces modernas con foco en accesibilidad, rendimiento y consistencia visual. Me gusta trabajar con componentes fuertemente tipados y animaciones sutiles que aportan sin distraer.",
	poem:"Entre el murmullo de la noche y el aliento del día, el código fluye. La claridad no llega volando, sino al pulir los detalles",
	cv:"Ver CV",
	like_it:"Me Gusta",
	card1:"Interfaces modernas y accesibles, con foco en performance.",
	card2:"Componentes tipados en TypeScript y arquitectura clara.",
	card3:"Integración CI/CD y buenas prácticas para producción.",
};

const en: Messages = {
	brand: "Paulo Gimenez",
	cta_view_projects: "View projects",
	cta_contact: "Contact",
	salutation: "¡HELLO!, I am",
	role: "Web Developer",
	about_title: "About me",
	currently: "Currently",
	active_projects: "Active projects",
	commits_30d: "Commits last 30 days",
	main_stack: "Main stack",
	explore_projects: "Explore projects",
	contact: "Contact",
	projects: "Projects",
	description:"I create digital experiences with React, TypeScript, and Vite, combining development, design, and accessibility to achieve modern, high-performance solutions.",
	about_me:"I design modern interfaces with a focus on accessibility, performance, and visual consistency. I enjoy working with strongly typed components and subtle animations that enhance without distracting.",
	poem:"Between the murmur of the night and the breath of the day, the code flows. Clarity doesn't come by flying, but by polishing the details.",
	cv:"See CV",
	like_it:"i like",
	card1:"Modern and accessible interfaces, with a focus on performance.",
	card2:"TypeScript-typed components and clear architecture.",
	card3:"CI/CD integration and best practices for production.",
};

const LOCALES: Record<Locale, Messages> = { es, en };

type I18nContextType = {
	locale: Locale;
	messages: Messages;
	setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const initial = (localStorage.getItem("locale") as Locale) || (navigator.language.startsWith("es") ? "es" : "en");
	const [locale, setLocaleState] = useState<Locale>(initial);
	const messages = useMemo(() => LOCALES[locale], [locale]);
	const setLocale = (l: Locale) => {
		setLocaleState(l);
		localStorage.setItem("locale", l);
		document.documentElement.lang = l;
	};
	return <I18nContext.Provider value={{ locale, messages, setLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}


