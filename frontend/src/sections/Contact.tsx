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
          {messages.contactDescription}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
          <a
            href="https://www.linkedin.com/in/paulo-gimenez-db/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-black/40 rounded-lg p-8 w-64 h-40 shadow-lg hover:bg-teal-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-teal-400 mb-4">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
            <span className="text-white font-semibold text-lg">LinkedIn</span>
            <span className="text-gray-400 text-sm mt-1">Paulo-Gimenez-db</span>
          </a>
          <a
            href="https://github.com/Paulo-Gimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-black/40 rounded-lg p-8 w-64 h-40 shadow-lg hover:bg-teal-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-teal-400 mb-4">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-white font-semibold text-lg">GitHub</span>
            <span className="text-gray-400 text-sm mt-1">Paulo-Gimenez</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
