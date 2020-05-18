import React, { useContext } from 'react'
import './Modal.css';
import { ModalContext } from '../../context/ModalContext';

export const Modal: React.FC = () => {
    // TODO: Handle offclick/handle hitting esc to close modal.
    const modal = useContext(ModalContext);
    const modalContainer = <div className="modal-container">
        <div className="modal">
            <button className="modal-exit" onClick={() => modal.dispatch({ type: 'HIDE' })}><i className="fas fa-times fa-2x"></i></button>
            <h2 className="modal-title">{modal.state.title}</h2>
            <div className="modal-body">
                {modal.state.component}
            </div>
        </div>
    </div>

    return (
        <React.Fragment>
            {modal.state.show ? modalContainer : null}
        </React.Fragment>
    )
};