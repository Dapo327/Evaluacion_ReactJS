// src/components/PropiedadItem.js
import React, { useState } from "react";
import Modal from "./modal";
import '../App.css';
import PropiedadDetalle from "./PropiedadDetalle";

function PropiedadItem({ propiedad }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPropiedad, setSelectedPropiedad] = useState(null);

  const handleVerDetalles = () => {
    setSelectedPropiedad(propiedad);
    setModalOpen(true);
  };

  return (
    <div className="propiedad">
      <img src={propiedad.ThumbnailURL} alt={propiedad.Title} />
      <h3>{propiedad.Title}</h3>
      <p> Location: {propiedad.Location}</p>
      <p>{propiedad.Bedrooms} Bedrooms</p>
      <p>{propiedad.Bathrooms} Bathrooms</p>
      <p>Price: ${propiedad["Sale Price"]}</p>
      <br></br>
      <button onClick={handleVerDetalles}>View Details</button>
      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          children={<PropiedadDetalle propiedad={selectedPropiedad} />}
        />
      )}
    </div>
  );
}

export default PropiedadItem;












