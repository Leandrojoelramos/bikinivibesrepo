import { useNavigate } from "react-router-dom";
import LottieStatic from "../../assets/animations/lotliestatic.jsx";

const Principal = () => {
  const navigate = useNavigate();

  const animationSunStyle = { height: 100 };
  const animationHeartStyle = { height: 100 };
  const animationHeartsStyle = { height: 150 };

  return (
    <div className="d-flex flex-column mt-5 align-items-center p-4">
      <h1 className="text-center mb-4">
        Temporada de Bikinis{" "}
        <LottieStatic id="burnCalories" style={animationHeartStyle} /> encontra
        la tuya en BikinisVibes donde las Vibras del Verano son todo el año{" "}
        <LottieStatic id="summerVibes" style={animationSunStyle} /> Colores,
        Calidad, Talles y Precios económicos en un mismo lugar!{" "}
        <LottieStatic id="loveLineArt" style={animationHeartsStyle} />
      </h1>

      <button
        onClick={() => navigate("/Catalogo")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff4081",
          color: "#fff",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#e73370")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4081")}
      >
        Ir a catálogo
      </button>
    </div>
  );
};

export default Principal;
