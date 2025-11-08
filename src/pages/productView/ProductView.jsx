import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CatalogData } from "../../components/custom/CatalogJson/catalogJson";
import { Whatsapp } from "../../assets/icons/icons";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const item =
    location.state?.item || CatalogData.find((p) => p.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  if (!item) return <p>Producto no encontrado</p>;

  const handleSendWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "543764528836";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setMessage(
      `Hola! Me interesa el producto *${item.name}* (${item.price}). ¿Podrías confirmarme disponibilidad?`
    );
    setShowModal(true);
  };

  return (
    <div className="container py-5 mt-5">
      <div
        className="card shadow-lg text-light mx-auto d-flex flex-lg-row flex-column align-items-center justify-content-between p-4"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "1.5rem",
          maxWidth: "1200px",
          gap: "2rem"
        }}
      >
        <div className="col-lg-5 col-12 text-center">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "15px",
              objectFit: "cover"
            }}
          />
        </div>

        <div className="col-lg-6 col-12 text-start">
          <h1 className="fw-bold mb-3">{item.name}</h1>
          <p className="fw-bolder fs-4 mb-4">{item.price}</p>

          <p className="mb-3">
            <strong>Colores disponibles:</strong> {item.colors.join(", ")}
          </p>
          <p className="mb-3">
            <strong>Talles:</strong> {item.waist.join(", ")}
          </p>

          {item.description && (
            <p className="mb-4">
              <strong>Descripción:</strong> {item.description}
            </p>
          )}

          <div className="d-flex flex-column gap-3">
            <button
              className="btn w-100"
              style={{
                background: "#20B2AA",
                color: "white",
                border: "1px solid #20B2AA",
                padding: "0.8rem"
              }}
              onClick={() => navigate("/Instrucciones")}
            >
              📏 Guía de tallas
            </button>

            <button
              className="btn w-100"
              style={{
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: "bold",
                padding: "0.8rem"
              }}
              onClick={handleOpenModal}
            >
              <div className="d-flex justify-content-center align-items-center col-12">
                <Whatsapp />
                Pedir por WhatsApp
              </div>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            style={{ maxWidth: "500px" }}
          >
            <div
              className="modal-content text-light p-3"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "1rem"
              }}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title">Enviar mensaje por WhatsApp</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <textarea
                  className="form-control"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "0.5rem",
                    padding: "0.8rem"
                  }}
                ></textarea>
              </div>

              <div className="modal-footer border-0 d-flex justify-content-between">
                <button
                  className="btn btn-secondary px-4"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="btn px-4"
                  style={{
                    backgroundColor: "#25D366",
                    color: "white",
                    fontWeight: "bold"
                  }}
                  onClick={handleSendWhatsApp}
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;
