import React, { useState } from "react";

const CallAction = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleButtonClick = () => {
    setShowEmail(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Transforma tu visión en una realidad digital
      </h3>
      <p
        style={{
          fontSize: "16px",
          marginBottom: "40px",
          color: "#666",
        }}
      >
        Si tienes una idea, una visión, no esperes a que las cosas sucedan, ¡haz que sucedan! - Richard Branson
      </p>
      {!showEmail ? (
        <div>
          <form style={{ marginBottom: "20px" }}>
            <div className="form-group">
              <label htmlFor="nombre" style={{ color: "#555" }}>
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo" style={{ color: "#555" }}>
                Correo electrónico:
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleButtonClick}
            >
              ¡Contáctame ahora!
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
            Gracias por tu interés. Te contactaremos pronto.
          </p>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Mientras tanto, puedes explorar más sobre nuestros servicios:
          </p>
          <a href="#" style={{ textDecoration: "underline", color: "blue" }}>
            Servicios
          </a>
        </div>
      )}
    </div>
  );
};

export default CallAction;

