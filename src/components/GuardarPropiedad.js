import React, { useState } from "react";
import PropiedadDetalle from "./PropiedadDetalle";
import Modal from "./Modal";

function SavedPropertiesModal({ savedProperties, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Propiedades guardadas</h2>
      <ul>
        {savedProperties.map((property) => (
          <li key={property.id}>
            <p>{property.Title}</p>
            <p>{property.Location}</p>
            {/* Optionally, add a button to view property details */}
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default SavedPropertiesModal;


