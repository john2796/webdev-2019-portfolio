import React from "react";
import { PDFObject } from "react-pdfobject";
import { Modal } from "reactstrap";
// add pdf later
class PDFModal extends React.Component {
  render() {
    const { toggle, isOpen } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <PDFObject
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxSValmtOKk8mJlY6NrJmmpUFj07emXVnYtnDL5bzkn48qRne"
          height="1080px"
        />
      </Modal>
    );
  }
}

export default PDFModal;
