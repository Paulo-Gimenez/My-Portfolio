import type { Locale } from "../i18n";
export type LocalizedText = Record<Locale, string>;
type Project = {
	id: string;
	title: LocalizedText;
	description: LocalizedText;
	techs: string[];
	link?: string;
	image?: string;
};


export const demoProjects: Project[] = [
	{
		id: "Barpoint-app",
		title: {
			es: "Barpoint App",
			en: "Barpoint App"
		},
		description: {
			es: "Desarrollo de BarPoint, una plataforma para bares que permite a los clientes acumular y canjear puntos por consumos.",
			en: "Development of BarPoint, a platform for bars that allows customers to accumulate and redeem points for purchases."
		},
		techs: ["TypeScript", "React", "Vite", "TailwindCSS", "Node.js", "Yarn Workspaces", "SQLite",],
		link: "https://barpoint.com.ar",
		image: "/bar.png"
	},
	{
		id: "officio",
		title: {
			es: "Fundación Oficios",
			en: "Fundation Offices"
		},
		description: {
			es: "Desarrollo de una landing page administrable para Fundación Oficios. Implementación de un panel de administración para la edición dinámica del contenido (textos, imágenes, secciones)",
			en: "Development of a manageable landing page for Fundación Oficios. Implementation of an administration panel for dynamic content editing (texts, images, sections)."
		},
		techs: ["TypeScript", "React", "Vite", "TailwindCSS", "Node.js", "Yarn Workspaces", "SQLite",],
		link: "https://fundacionoficios.org.ar/",
		image: "/oficios.svg"
	},
	{
		id: "Amia",
		title: {
			es: "servicios Amia",
			en: "Amia services"
		},
		description: {
			es: "Desarrollo de plataforma integral de servicio de empleo (recruiting) multi-tenant para AMIA.",
			en: "Development of a comprehensive multi-tenant employment service (recruiting) platform for AMIA."
		},
		techs: ["TypeScript", "React", "Vite", "TailwindCSS", "Node.js", "Yarn Workspaces", "SQLite",],
		link: "https://www.linkedin.com/in/paulo-gimenez-db/",
		image: "/servicio-de-empleo.svg"
	}
];