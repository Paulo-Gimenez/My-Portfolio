import { useState } from "react";
import { useI18n } from "../i18n";
import emailjs from "@emailjs/browser";

function Contact() {
  const { messages } = useI18n();

  // Estados para inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      if (res.status === 200) {
        setStatus("Mensaje enviado ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Error al enviar ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error en la conexión ❌");
    }
  };

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

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 w-full max-w-xl text-left opacity-0 animate-fadein-300"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            placeholder="Tu nombre"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            placeholder="Tu email"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md bg-black/40 px-4 py-3 text-white placeholder-gray-500 
                       ring-1 ring-white/10 focus:ring-teal-400 outline-none"
            rows={4}
            placeholder="Mensaje"
          />
          <button
            type="submit"
            className="mt-2 self-start rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold 
                       text-white hover:bg-teal-400 active:scale-[0.98] transition"
          >
            Enviar
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
