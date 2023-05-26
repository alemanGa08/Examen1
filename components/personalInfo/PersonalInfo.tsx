import React from "react";

const PersonalInfo = () => {
  return (
    <div className="card bg-light bg-gradient item">
      <div className="container text-center">
        <h1 className="text-dark">GABRIELA ALEMAN</h1>
        <h2 className="text-dark">UNIVERSIDAD NACIONAL</h2>
        <h3 className="text-dark">Estudiante Ingeniería en Sistemas</h3>
        <p className="text-dark">Edad: 20 años</p>
        <p className="text-dark">Estado Civil: Soltera</p>
        <p className="text-dark">Lugar de residencia: Golfito, Costa Rica</p>
        <h3 className="text-dark">Descripción de la empresa:</h3>
        <p className="text-dark">
          DigitalDreams es una empresa dedicada a proporcionar soluciones digitales innovadoras para empresas y personas que buscan mejorar su presencia en línea. Ofrecemos servicios como diseño web, desarrollo de aplicaciones móviles, marketing digital, optimización de motores de búsqueda (SEO), gestión de redes sociales y desarrollo de software personalizado. Nuestro objetivo es ayudar a nuestros clientes a lograr sus objetivos en línea y hacer realidad sus sueños digitales. Con un enfoque en la calidad y el servicio al cliente, estamos comprometidos en proporcionar soluciones digitales de última generación que impulsen el éxito de nuestros clientes.
        </p>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          Contactarme en LinkedIn
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;

