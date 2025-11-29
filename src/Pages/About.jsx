import prod1 from "../assets/prod1.webp";
import prod2 from "../assets/prod2.jpg";
import prod4 from "../assets/prod4.png";

function About() {
  return (
    <div className="container py-5">
      {/* ABOUT SECTION */}
      <section className="mb-5 p-4 rounded shadow-sm bg-light">
        <h2 className="mb-3 text-primary fw-bold">About Parapharmacy Plus</h2>

        <p className="fs-5">
          This <strong>Parapharmacy</strong> application offers a simple, fast,
          and intuitive experience for users who want to browse or purchase
          wellness, skincare, beauty, and hygiene products.
        </p>

        <h4 className="mt-4 fw-bold">✨ Key Features</h4>
        <ul className="fs-5 mt-2">
          <li>
            <strong>Complete Catalogue:</strong> Products organized by
            categories.
          </li>
          <li>
            <strong>Smart Search:</strong> Quickly find any product.
          </li>
          <li>
            <strong>Detailed Product Page:</strong> Price, description,
            ingredients, and more.
          </li>
          <li>
            <strong>Shopping Cart:</strong> Add, modify, and remove items
            easily.
          </li>
          <li>
            <strong>Modern Interface:</strong> Clean, responsive, and
            user-friendly design.
          </li>
        </ul>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="p-4 rounded shadow-sm bg-white">
        <div
          id="demoCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* Carousel images */}
          <div className="carousel-inner rounded shadow-sm">
            {[prod2, prod1, prod4].map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
