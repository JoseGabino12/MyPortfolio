import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir el modal */ }
      <p
        className="cursor-pointer"
        onClick={ openModal }
      >
        CV
      </p>

      {/* Modal para visualizar el PDF */ }
      { modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white dark:bg-black rounded-lg shadow-lg w-full max-w-3xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Currículum Vitae</h2>
              <button
                className="text-red-500 font-bold"
                onClick={ closeModal }
              >
                X
              </button>
            </div>

            {/* Visor de PDF con iframe */ }
            <div className="h-96">
              <iframe
                src="/assets/docs/CV-Gabino-2024-EN.pdf"
                width="100%"
                height="100%"
                className="border-none"
                title="CV"
              />
            </div>

            {/* Botón para descargar el PDF */ }
            <div className="mt-4 flex justify-end">
              <a
                href="/assets/docs/CV-Gabino-2024-EN.pdf"
                download="CV-Gabino-2024-EN.pdf"
                className="border-black dark:border-white border py-2 px-4 rounded"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Modal;