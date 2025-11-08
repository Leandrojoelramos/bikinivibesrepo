import { useState, useEffect } from "react";

const CardView = ({
  title,
  content,
  images = [], 
  imageUrl, 
  viewImage,
  animation = false,
  animationTime = 3000, 
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (animation && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, animationTime);
      return () => clearInterval(interval);
    }
  }, [animation, images.length, animationTime]);

  const displayedImage =
    images.length > 0 ? images[currentImage] : imageUrl || "";

  return (
    <div
      className="card-view"
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        overflow: "hidden",
        width: "320px",
        margin: "20px auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
      }}
    >
      <div
        className="card-header"
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        {title}
      </div>

      {viewImage && displayedImage && (
        <div
          style={{
            width: "100%",
            height: "240px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={displayedImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
              borderBottom: "1px solid #eee",
            }}
          />

          {/* Indicadores del slider */}
          {animation && images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "6px",
              }}
            >
              {images.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentImage ? "#fff" : "rgba(255,255,255,0.5)",
                    transition: "background-color 0.3s",
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        className="card-body"
        style={{
          padding: "14px 18px",
          color: "#333",
          fontSize: "1rem",
          lineHeight: "1.4",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default CardView;

