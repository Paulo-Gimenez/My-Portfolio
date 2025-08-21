interface CVModalProps {
    open: boolean;
    onClose: () => void;
    pdfUrl: string;
  }
  
  export default function CVModal({ open, onClose, pdfUrl }: CVModalProps) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-[#0d1426] w-[95%] max-w-5xl rounded-2xl shadow-xl p-6 relative">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>
  
          <h2 className="text-2xl font-bold text-white mb-4">Preview CV</h2>
          <iframe
            src={pdfUrl}
            className="w-full h-[70vh] rounded-lg border border-white/10"
            title="CV Preview"
          />
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="rounded-md border border-gray-500/60 px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700/50"
            >
              Cerrar
            </button>
            <a
              href={pdfUrl}
              download
              className="rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-400"
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
    );
  }
  