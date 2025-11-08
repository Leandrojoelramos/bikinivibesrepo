import { Instagram,  Whatsapp} from "../../assets/icons/icons";

const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center col-12 mt-5 pt-5 align-items-center mt-5">
      <div
        className="card text-center p-4 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "1rem",
          color: "white",
          width: "1200px"
        }}
      >
        <h2 className="mb-3">¿Tienes preguntas?</h2>
        <p className="mb-1">Contáctanos a través de nuestras redes sociales:</p>
        <p className="mb-4">
          O llamanos al: <strong>3764-528836</strong>
        </p>

        <div className="d-flex flex-column gap-3">
          <button
            className="btn"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              fontWeight: "bold"
            }}
            onClick={() => window.open("https://wa.me/543764528836", "_blank")}
          >
            <div className="d-flex justify-content-center align-items-center col-12">
              <Whatsapp />
              WhatsApp
            </div>
          </button>

          <button
            className="btn"
            style={{
              background:
                "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
              color: "white",
              fontWeight: "bold"
            }}
            onClick={() =>
              window.open("https://www.instagram.com/_bikinisvibes_", "_blank")
            }
          >
            <div className="d-flex justify-content-center align-items-center col-12">
              <Instagram />
              Instagram
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
