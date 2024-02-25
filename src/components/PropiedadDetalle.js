import React, { useState } from "react";
import "../Modal.css";

function PropiedadDetalle({ propiedad, onClose }) {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    comments: "",
  });

  // State for error message
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State for success message
  const [success, setSuccess] = useState(false);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    const { fullName, email, phone, comments } = inputs;
    if (!fullName || !email || !phone || !comments) {
      setError(true);
      setErrorMessage("All fields are required");
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
    ) {
      setError(true);
      setErrorMessage("The email does not have a valid format");
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="propiedad-detalle">
      <div className="propiedad-detalle-container">
        <div className="propiedad-detalle-image">
          <img src={propiedad.ThumbnailURL} alt={propiedad.Title} />
        </div>
        <div className="propiedad-detalle-info">
          <h1>{propiedad.Title ?? "Sin título"}</h1>
          <p>Location: {propiedad.Location ?? "Sin ubicación"}</p>
          <p>Date Listed: {propiedad.DateListed ?? "Sin fecha"}</p>
          <p>{propiedad.Description ?? "Sin descripción"}</p>
          <p>SQFT: {propiedad.Sqft ?? "Sin superficie"} pies cuadrados</p>
          <p>Bedrooms: {propiedad.Bedrooms ?? "Sin dormitorios"} dormitorios</p>
          <p>Bathrooms: {propiedad.Bathrooms ?? "Sin baños"} baños</p>
          <p>Parking: {propiedad.Parking ?? "Sin parking"}</p>
          <p>Year Built: {propiedad.YearBuilt ?? "Sin año"}</p>
          <p>Price: ${propiedad["Sale Price"] ?? "Sin precio"}</p>
        </div>
      </div>

      <div className="contact-agent-form">
        <h3>Contact Agent</h3>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            required
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            onChange={handleInputChange}
          />
          <input
            type="tel"
            pattern="[0-9]{10}"
            name="phone"
            placeholder="Phone Number*"
            required
            onChange={handleInputChange}
          />
          <textarea
            name="comments"
            placeholder="Comments*"
            required
            onChange={handleInputChange}
          />
          <button type="submit">Contact Now</button>
        </form>
        {error && <p className="error-message">{errorMessage}</p>}
        {success && <p className="success-message">Message sent successfully</p>}
      </div>
    </div>
  );
}

export default PropiedadDetalle;



