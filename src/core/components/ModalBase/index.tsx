import { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import './styles.scss';

type ModalForm = {
  title: string;
  children: ReactNode;
}

Modal.setAppElement('#root')

const ModalBase = ({ title, children }: ModalForm) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>Adicionar</button>
      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Modal Modelo"
      >
        <header>
          <h2>{title}</h2>
          <button className="btn-header-close" onClick={closeModal} />
        </header>
        <section className="section-modal-body">
          {children}
        </section>
      </Modal>
    </div>
  );
}

export default ModalBase;