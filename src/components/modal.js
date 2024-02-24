//./src/components/modal.js

import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function MyModal({ onClose, children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(true);

    return () => setModalIsOpen(false);
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
    >
      <button className="close-modal" onClick={onClose}>
        X 
      </button>
      {children} 
    </Modal>
  );
}

export default MyModal;

