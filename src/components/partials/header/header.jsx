import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container bg-Header d-flex flex-column flex-sm-row justify-content-between align-items-center px-3 py-3">
     
      <div className="mb-2 mb-sm-0 text-center text-sm-start">
        <button
          onClick={() => navigate("/Pagina-Principal")}
          className="nav-btn"
        >
          <h3 className="fs-5 fs-sm-4 m-0">Home</h3>
        </button>
      </div>

      <div className="d-flex flex-wrap justify-content-center justify-content-sm-end gap-3">
        <button onClick={() => navigate("/Catalogo")} className="nav-btn">
          <h5 className="fs-6 fs-sm-5 m-0">Catálogo</h5>
        </button>
        <button onClick={() => navigate("/Contactanos")} className="nav-btn">
          <h5 className="fs-6 fs-sm-5 m-0">Contáctanos</h5>
        </button>
        <button onClick={() => navigate("/Instrucciones")} className="nav-btn">
          <h5 className="fs-6 fs-sm-5 m-0">Ayuda</h5>
        </button>
      </div>
    </div>
  );
};

export default Header;
