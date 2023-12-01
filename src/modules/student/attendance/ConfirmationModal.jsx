import React from 'react';
import './modal.css';

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, isReasonConfirmed }) => {
  return (
    <div className={`confirmation-modal ${isOpen ? 'open' : ''}`}>
      <div className="confirmation-content">
        <p>Are you sure you want to send?</p>
        <button onClick={onConfirm} className={`yes ${isReasonConfirmed ? 'green' : ''}`}>
          Yes
        </button>
        <button onClick={onCancel} className='noo'>No</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
