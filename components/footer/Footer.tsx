import { FaFacebook, FaWhatsapp, FaEnvelope, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/gabrielaaleman" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Gabriela Aleman
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gabyaleman08" target="_blank" rel="noopener noreferrer">
                  <FaInstagramSquare /> gabyaleman08
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-md-end">
            <h4>Contáctame</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://wa.me/+50685179240" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> +(506) 85179240
                </a>
              </li>
              <li>
                <a href="mailto:gabyaleman52@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope /> gabyaleman52@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





