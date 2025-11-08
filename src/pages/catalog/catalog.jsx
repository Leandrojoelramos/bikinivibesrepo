import { useNavigate } from "react-router-dom";
import CardView from "../../components/custom/CardView/cardView";
import { CatalogData } from "../../components/custom/CatalogJson/catalogJson";

const Catalog = () => {
  const navigate = useNavigate();

  const handleSelect = (item) => {
    navigate(`/Producto/${item.id}`, { state: { item } });
  };

  return (
    <div className="mt-5">
      <h1 className="d-flex mt-3 justify-content-center">Nuestra Colección</h1>

      <div
        className="d-flex flex-wrap mt-3 justify-content-center gap-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        {CatalogData.map((item) => (
          <div key={item.id} onClick={() => handleSelect(item)}>
            <CardView
              title={item.name}
              content={
                <div>
                  <p>
                    <strong>Colores:</strong> {item.colors.join(", ")}
                  </p>
                  <p>
                    <strong>Talles:</strong> {item.waist.join(", ")}
                  </p>
                  <p>
                    <strong>Precio:</strong> {item.price}
                  </p>
                </div>
              }
              imageUrl={item.imageUrl}
              viewImage={item.viewImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
