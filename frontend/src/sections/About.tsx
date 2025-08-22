import { useState } from "react";
import { useI18n } from "../i18n";
import CVModal from "../modals/cv-modals";

function About() {
  const { messages } = useI18n();
  const [openCV, setOpenCV] = useState(false);

  return (
    <section
      id="about"
      className="relative w-screen py-24 bg-gradient-to-b from-[#0b1220] to-[#0a0f1c]"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <hr className="w-16 border-teal-400/40" />
          <span className="mx-4 text-teal-300/90 text-sm tracking-[0.35em]">
            ✧ {messages.about_title} ✧
          </span>
          <hr className="w-16 border-teal-400/40" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[url('/parabolic-rectangle.svg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-[#071024]/70" />
              <div className="relative p-8 sm:p-10 opacity-0 animate-fadein-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Paulo Gimenez
                </h2>
                <p className="mt-2 text-teal-300">
                  {messages.role} · React · TypeScript
                </p>
                <p className="mt-5 max-w-3xl text-gray-300">
                  {messages.about_me}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Vite", "Tailwind", "UI/UX"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-teal-400/30"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/paulo-gimenez-db"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-400"
                  >
                    LinkedIn
                  </a>
                  <button
                    onClick={() => setOpenCV(true)}
                    className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    {messages.cv}
                  </button>

                  <a
                    href="#contact"
                    className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    {messages.contact}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-teal-300/80">
              <hr className="w-24 border-white/10" />
              <span className="mx-3">✶ ☾ ✶</span>
              <hr className="w-24 border-white/10" />
            </div>
            <figure className="rounded-2xl bg-[#0d1426]/70 p-6 ring-1 ring-white/10 opacity-0 animate-fadein-300">
              <blockquote className="text-gray-300 italic text-sm sm:text-base">
               {messages.poem}
              </blockquote>
            </figure>
            <div className="rounded-2xl bg-[#0d1426]/70 p-6 ring-1 ring-white/10 opacity-0 animate-fadein-300">
              <h3 className="text-white font-semibold">{messages.i_like}</h3>
              <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                <li>
                {messages.card1}
                </li>
                <li>
                {messages.card2}
                </li>
                <li>
                {messages.card3}
                </li>
              </ul>
            </div>
          </div>
          <aside className="rounded-2xl bg-[#0d1426]/70 p-6 ring-1 ring-white/10 text-gray-300 opacity-0 animate-fadein-300">
            <h3 className="text-white font-semibold">{messages.currently}</h3>
            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <dt>{messages.projects}</dt>
                <dd className="text-teal-300 font-semibold">3</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>{messages.main_stack}</dt>
                <dd className="text-teal-300 font-semibold">
                  React · TS · Vite
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="https://github.com/Paulo-Gimenez"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Paulo-Gimenez&show_icons=true&include_all_commits=true&count_private=true&theme=tokyonight&hide_border=true"
                  alt="GitHub Stats de Paulo Gimenez"
                  loading="lazy"
                  className="rounded-lg ring-1 ring-white/10"
                />
              </a>
            </div>
            <a
              href="#projects"
              className="mt-6 inline-block w-full rounded-md bg-teal-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-teal-400"
            >
              Explorar proyectos
            </a>
          </aside>
        </div>
      </div>
      <CVModal
        open={openCV}
        onClose={() => setOpenCV(false)}
        pdfUrl="/paulo-gimenez-cv.pdf"
      />
    </section>
  );
}

export default About;
