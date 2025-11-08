import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container d-flex justify-content-between bg-Header align-items-center px-4 py-3">
      <div>
        <button onClick={() => navigate("/Pagina-Principal")} className="nav-btn">
          <h3>Home</h3>
        </button>
      </div>
      <div className="d-flex gap-4">
        <button onClick={() => navigate("/Catalogo")} className="nav-btn">
          <h5>Catálogo</h5>
        </button>
        <button onClick={() => navigate("/Contactanos")} className="nav-btn">
          <h5>Contáctanos</h5>
        </button>
        <button onClick={() => navigate("/Instrucciones")} className="nav-btn">
          <h5>Ayuda</h5>
        </button>
      </div>
    </div>
  );
};

export default Header;
