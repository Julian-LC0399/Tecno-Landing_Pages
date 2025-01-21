import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Asegúrate de que la URL apunte a tu API
      await axios.post("http://localhost:8000/api/leads", { name, email });
      alert("Gracias por suscribirte!");
      setName("");
      setEmail("");
    } catch (err) {
      setError(
        "Hubo un problema al enviar tus datos. Inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <h3>Suscríbete para más información</h3>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        aria-label="Nombre"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Suscribirse"}
      </button>
    </form>
  );
};

export default LeadForm;