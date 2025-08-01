import { FunctionComponent } from 'react';
import { Button, Content, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant } from '@patternfly/react-core';

interface Props {
  onClose: (startTour?: boolean) => void;
}

export const AnimationsStartTourModal: FunctionComponent<Props> = ({ onClose }) => (
  <Modal
    variant={ModalVariant.small}
    isOpen
    onClose={() => onClose()}
    aria-labelledby="guided-tour-title"
    aria-describedby="guided-tour-description"
  >
    <ModalHeader
      title={<div style={{ whiteSpace: 'initial' }}>Explore PatternFly’s new animations</div>}
      labelId="guided-tour-title"
    />
    <ModalBody id="guided-tour-description">
      <Content component="p">
        Welcome! Many of our components now use motion to engage users, provide clear feedback, and improve usability.
        Let's explore some of these new animations and see how they work in a real UI.
      </Content>
    </ModalBody>
    <ModalFooter>
      <Button key="start" variant="primary" onClick={() => onClose(true)}>
        Start tour
      </Button>
      <Button key="skip" variant="link" onClick={() => onClose()}>
        Not now
      </Button>
    </ModalFooter>
  </Modal>
);
