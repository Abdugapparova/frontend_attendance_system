import React, { useState } from 'react';
import './modal.css';
import ConfirmationModal from './ConfirmationModal';

const ReasonModal = ({ isOpen, closeModal, setIsReasonConfirmed }) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [reasonText, setReasonText] = useState('');
  const [file, setFile] = useState(null);
  const [documentUploaded, setDocumentUploaded] = useState(false);

  const handleSend = () => {
    setConfirmationOpen(true);
  };

  const closeModalAndConfirm = () => {
    setConfirmationOpen(false);
    closeModal();
    setIsReasonConfirmed(true);  // Call the setIsReasonConfirmed function to update the state
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDelete = () => {
    setDocumentUploaded(false);
    setConfirmationOpen(false);
    closeModal();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'close'}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>

        <h2>Upload Absence Certificate</h2>

        {documentUploaded ? (
          <>
            <p>Document is uploaded.</p>
            <button onClick={handleDelete}>Delete Document</button>
          </>
        ) : (
          <>
            <textarea
              placeholder="Please enter your reason for absence here..."
              rows="4"
              cols="50"
              value={reasonText}
              onChange={(e) => setReasonText(e.target.value)}
              className='reasonText'
            />

            <p>Upload a file:</p>
            <input type="file" onChange={handleFileChange} />

            {file && (
              <div>
                <p>File selected: {file.name}</p>
                <button onClick={() => setFile(null)} className='del'>Delete Uploaded File</button>
              </div>
            )}
            <br />
            <div className='buttons'>
              <button
                onClick={handleSend}
                className={`send`}
              >
                Send
              </button>
              <button onClick={closeModal} className='cancelB'>Cancel</button>
            </div>
          </>
        )}
      </div>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={closeModalAndConfirm}
        onCancel={() => setConfirmationOpen(false)}
      />
    </div>
  );
};

export default ReasonModal;
