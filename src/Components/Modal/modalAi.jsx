import React from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function ModalAi({ showModal, onCloseModal, children }) {
  return (
    <Modal show={showModal} onHide={onCloseModal} animation={false}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </motion.div>
    </Modal>
  );
}

export default ModalAi;
