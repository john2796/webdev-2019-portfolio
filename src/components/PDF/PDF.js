import React from "react";
import { PDFObject } from "react-pdfobject";
import { Modal } from "reactstrap";
import jbresume from '../../assets/jbMiranda.pdf'
// add pdf later
class PDFModal extends React.Component {
  render() {
    const { toggle, isOpen } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <PDFObject
          url={jbresume}
          height="1080px"
        />
      </Modal>
    );
  }
}

export default PDFModal;
