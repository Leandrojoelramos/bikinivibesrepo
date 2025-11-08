import instruction from "../../assets/images/Talles.jpeg";

const Instuctions = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
      <div
        className="card p-4 shadow-lg text-light"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "1rem",
          maxWidth: "700px",
          width: "90%"
        }}
      >
        <h1 className="mb-3 text-center fw-bold">Ayuda e Instrucciones</h1>
        <p className="text-center mb-4">
          Aquí encontrarás toda la información necesaria para realizar tus
          pedidos y resolver tus dudas.
        </p>

        <h2 className="mt-3">Cómo realizar un pedido</h2>
        <p>
          1. Navega por nuestro catálogo y selecciona el producto que deseas.{" "}
          <br />
          2. Haz clic en el botón <strong>“Pedir por WhatsApp”</strong>. <br />
          3. Se abrirá una conversación donde podrás consultar disponibilidad y
          realizar tu pedido.
        </p>

        <h2 className="mt-3">Métodos de pago</h2>
        <p>
          Aceptamos los siguientes métodos de pago: <strong>Efectivo</strong> y{" "}
          <strong>Transferencia bancaria</strong>.
        </p>

        <h2 className="mt-3">Política de devoluciones</h2>
        <p>
          No hay devoluciones. Por favor, revisa bien el producto antes de
          comprarlo, especialmente la talla y el color. Dado que se trata de una
          bikini (como ropa interior), no se aceptan cambios ni devoluciones.
        </p>

        <h2 className="mt-3">Talles</h2>
        <p>
          Ofrecemos una variedad de tallas para adaptarnos a tus necesidades.
          Asegúrate de revisar nuestra guía de talles para encontrar la opción
          perfecta para ti.
        </p>

        <h2 className="mt-3">Guía de Medidas y Talles</h2>
        <div className="text-center mt-3">
          <img
            src={instruction}
            alt="imagen de los talles de la bikini"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instuctions;
