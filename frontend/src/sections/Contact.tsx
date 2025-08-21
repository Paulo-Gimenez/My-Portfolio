import { useI18n } from "../i18n";

function Contact() {
  const { messages } = useI18n();

  return (
    <section
      id="contact"
      className="relative w-screen flex justify-center py-24 bg-gray-900"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white opacity-0 animate-fadein-100">
          {messages.contact}
        </h2>
        <p className="mt-4 max-w-2xl text-gray-300 opacity-0 animate-fadein-200">
          ¿Tienes un proyecto o una idea? Hablemos.
        </p>
        <form className="mt-8 grid gap-4 w-full max-w-xl text-left opacity-0 animate-fadein-300">
          <input
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            placeholder="Tu nombre"
          />
          <input
            type="email"
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            placeholder="Tu email"
          />
          <textarea
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            rows={4}
            placeholder="Mensaje"
          />
          <button
            type="button"
            className="mt-2 self-start rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold 
                       text-white hover:bg-teal-400 active:scale-[0.98] transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
