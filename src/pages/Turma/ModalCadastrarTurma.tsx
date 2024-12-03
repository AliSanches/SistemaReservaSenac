import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { IoAdd } from "react-icons/io5";

export const ModalCadastrarTurma = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rows = [];

  for (let i = 0; i <= 500; i++) {
    rows.push(i);
  }

  return (
    <>
      <button
        className="fs-4 text-white py-1 px-2 rounded border-0 bg-primary"
        onClick={handleShow}
      >
        <IoAdd />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Turma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Label>Nome do curso</Form.Label>
            <Form.Select aria-label="Nome do curso" className="mb-3">
              <option value="1">Administração</option>
              <option value="1">Desenvolvimento de sistemas</option>
              <option value="1">Biologia</option>
            </Form.Select>

            <Form.Label>Número da turma</Form.Label>
            <Form.Select aria-label="Número da turma" className="mb-3">
              {rows.map((index, qtd) => (
                <option key={index}>{qtd}</option>
              ))}
            </Form.Select>

            <Form.Label>Data Início</Form.Label>
            <Form.Control type="date" className="mb-3" />

            <Form.Label>Data Término</Form.Label>
            <Form.Control type="date" className="mb-3" />

            <Form.Label>Hora Início</Form.Label>
            <Form.Control type="text" className="mb-3" placeholder="00:00" />

            <Form.Label>Hora Término</Form.Label>
            <Form.Control type="text" className="mb-3" placeholder="00:00" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="primary">Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
