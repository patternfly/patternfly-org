import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalVariant,
  Label
} from '@patternfly/react-core';
import './feedbackButton.css';

export const FeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="ws-feedback-button-container">
        <Button variant="primary" size="sm" className="ws-feedback-button" onClick={handleModalToggle}>Give feedback</Button>
      </div>

      <Modal
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-label="PatternFly feedback modal"
        aria-describedby="feedback-modal-description"
        className="ws-feedback-modal"
      >
        <ModalBody tabIndex="0" id="feedback-modal-description">
          <iframe 
            src="https://www.feedback.redhat.com/jfe/form/SV_9MKBjq8H7muINMy" 
            title="Give PatternFly feedback"
            className="ws-feedback-iframe"
          ></iframe>
        </ModalBody>
      </Modal>
    </>
  );
};
