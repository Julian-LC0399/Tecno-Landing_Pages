import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot">
      <button
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label={isOpen ? "Cerrar chatbot" : "Abrir chatbot"}
      >
        {isOpen ? "✖️" : "💬"}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <h4>Chatbot de Atención al Cliente</h4>
          <p>¿En qué puedo ayudarte hoy?</p>
          {/* Aquí puedes integrar un chatbot real */}
          <div className="chatbot-messages">
            {/* Mensajes del chatbot se pueden renderizar aquí */}
          </div>
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            aria-label="Mensaje del chatbot"
          />
          <button type="submit">Enviar</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
