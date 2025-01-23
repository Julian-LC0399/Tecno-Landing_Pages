import React, { useState } from 'react';
import camon19Image from '../images/camon19.png'; // Asegúrate de que la ruta sea correcta
import spark8Image from '../images/spark8.jpg'; // Asegúrate de que la ruta sea correcta

const phones = [
    {
        model: 'Tecno Camon 19',
        image: camon19Image,
        description: (
            <div>
                <p><strong>Cámara:</strong> Alta resolución con IA para fotos de calidad.</p>
                <p><strong>Pantalla:</strong> 6.8 pulgadas, ideal para multimedia.</p>
                <p><strong>Batería:</strong> Duradera, perfecta para uso diario.</p>
            </div>
        ),
        price: 199.99,
    },
    {
        model: 'Tecno Spark 8',
        image: spark8Image,
        description: (
            <div>
                <p><strong>Cámara:</strong> Doble cámara para capturar momentos.</p>
                <p><strong>Pantalla:</strong> 6.5 pulgadas, buena para juegos y videos.</p>
                <p><strong>Batería:</strong> Duradera, perfecta para uso diario.</p>
            </div>
        ),
        price: 149.99,
    },
];

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del chatbot

    const handleSend = () => {
        if (input.trim() === '') return; // Evitar enviar mensajes vacíos

        const userMessage = input;
        setMessages([...messages, { text: userMessage, sender: 'user' }]);
        setInput('');

        // Respuesta del chatbot
        const botResponse = getBotResponse(userMessage);
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('hola')) {
            return "¡Hola! ¿En qué puedo ayudarte hoy?";
        } else if (lowerMessage.includes('camon 19')) {
            return (
                <div>
                    <h3>{phones[0].model}</h3>
                    <img src={phones[0].image} alt={phones[0].model} style={{ width: '100px' }} />
                    {phones[0].description}
                    <p><strong>Precio:</strong> ${phones[0].price}</p>
                </div>
            );
        } else if (lowerMessage.includes('spark 8')) {
            return (
                <div>
                    <h3>{phones[1].model}</h3>
                    <img src={phones[1].image} alt={phones[1].model} style={{ width: '100px' }} />
                    {phones[1].description}
                    <p><strong>Precio:</strong> ${phones[1].price}</p>
                </div>
            );
        } else {
            return "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?";
        }
    };

    return (
        <div className="chatbot-wrapper">
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Cerrar Chat' : 'Abrir Chat'}
            </button>
            {isOpen && (
                <div className="chatbot-container">
                    <h2 className="chatbot-header">Chatbot</h2>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <strong>{msg.sender === 'user' ? 'Tú' : 'Bot'}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe un mensaje..."
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Chatbot;