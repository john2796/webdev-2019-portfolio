import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Element } from "react-scroll";

import {
  ProjectContainer,
  ProjectSubHeader,
  ThumbnailContainer,
  ContentWrapper,
  Thumbnail,
  Astyle,
  FullSize,
  ModalTextWrapper,
  ModalTitle,
  ModalSubTitle,
  ModalDescription,
  ButtonWrapper,
  ModalFooter
} from "./ProjectStyles";
import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";
import img4 from "../../assets/04.jpg";
import img7 from "../../assets/07.jpg";
const img5 =
  "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-450w-1037719192.jpg";

const thumbSize = { width: "370px", height: "217px" };
const fullSize = { width: "100%" };

class Projects extends Component {
  state = {
    modalAnchored: false,
    modalCrytpoGym: false,
    modalProfJb: false,
    modalBCAD: false,
    modalTwo: false,
    modalRealEstate: false
  };

  toggleAnchored = () => {
    this.setState({
      modalAnchored: !this.state.modalAnchored
    });
  };

  toggleCryptoGym = () => {
    this.setState({
      modalCrytpoGym: !this.state.modalCrytpoGym
    });
  };
  toggleRealEstate = () => {
    this.setState({
      modalRealEstate: !this.state.modalRealEstate
    });
  };

  toggleProfJb = () => {
    this.setState({
      modalProfJb: !this.state.modalProfJb
    });
  };

  toggleBCAD = () => {
    this.setState({
      modalBCAD: !this.state.modalBCAD
    });
  };
  toggleTwo = () => {
    this.setState({
      modalTwo: !this.state.modalTwo
    });
  };

  render() {
    return (
      <Element name="Projects">
        <ProjectContainer>
          <ContentWrapper>
            <ProjectSubHeader>
              PROJECTS
              <div className="header-bar" />
            </ProjectSubHeader>
            <ThumbnailContainer>
              <Thumbnail
                src={img7}
                style={thumbSize}
                onClick={this.toggleRealEstate}
                alt="project card"
              />
              <Thumbnail
                src={img3}
                style={thumbSize}
                onClick={this.toggleProfJb}
                alt="project card"
              />
              <Thumbnail
                src={img1}
                style={thumbSize}
                onClick={this.toggleAnchored}
                alt="project card"
              />
              <Thumbnail
                src={img2}
                style={thumbSize}
                onClick={this.toggleCryptoGym}
                alt="project card"
              />
              <Thumbnail
                src={img4}
                style={thumbSize}
                onClick={this.toggleBCAD}
                alt="project card"
              />
              <Thumbnail
                src={img5}
                style={thumbSize}
                onClick={this.toggleTwo}
                alt="project card"
              />
            </ThumbnailContainer>
            <ButtonWrapper>
              <a
                href="https://www.johnbenedictmiranda.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              />
            </ButtonWrapper>
          </ContentWrapper>
        </ProjectContainer>
        {/* Card modal*/}
        <Modal isOpen={this.state.modalAnchored} toggle={this.toggleAnchored}>
          <ModalBody>
            <a
              href="https://miranda-insta-clone.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img1} style={fullSize} alt="A Instagram clone" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>Instagram</ModalTitle>
              <ModalSubTitle>A Instagram clone</ModalSubTitle>
              <ModalDescription>
                built with React, Redux, Node.js, Express, Mongoose, Bycrpyt ,
                Passport , Passport-jwt.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleAnchored}>
            <Astyle
              href="https://miranda-insta-clone.netlify.com/"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/React-Insta-Clone-1"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>
        {/* Card modal*/}
        <Modal isOpen={this.state.modalCrytpoGym} toggle={this.toggleCryptoGym}>
          <ModalBody>
            <a
              href="https://mytools2019-nc83oebj7.now.sh/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img2} style={fullSize} alt="Use My Tool" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>Use My Tool</ModalTitle>
              <ModalSubTitle />
              <ModalDescription>
                It doesn't make sense to purchase many items that are costly.
                Instead, you can rent such items from reliable people and
                businesses in your local community using the Use My Tool app.
                Built with React Bootstrap with Material Design && MERN
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleCryptoGym}>
            <Astyle
              href="https://mytools2019-nc83oebj7.now.sh/register"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/use-my-tools/Front-End"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
            <Astyle
              href="https://www.youtube.com/watch?v=7SomB_hSfS0&feature=youtu.be"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>
        {/* Card modal*/}
        <Modal isOpen={this.state.modalProfJb} toggle={this.toggleProfJb}>
          <ModalBody>
            <a
              href="https://miranda-restaurant-3wd9nqkmp.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize
                src={img3}
                style={fullSize}
                alt="The Soul Food & Bistro"
              />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>The Soul Food & Bistro</ModalTitle>
              <ModalSubTitle>A modern website for a Restaurant</ModalSubTitle>
              <ModalDescription>
                Miranda Restaurant is a site I created to showcase my passion
                for food as well as my visual art. Built with React .
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleProfJb}>
            <Astyle
              href="https://miranda-restaurant-3wd9nqkmp.now.sh/"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/portfolio-restaurant-01"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>
        {/* Card modal*/}
        <Modal isOpen={this.state.modalBCAD} toggle={this.toggleBCAD}>
          <ModalBody>
            <a
              href="https://redux-nasa-fwmiybrxm.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img4} style={fullSize} alt="NASA" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>NASA</ModalTitle>
              <ModalDescription>
                Built with NASA api and React.js
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleBCAD}>
            <Astyle href="https://redux-nasa-fwmiybrxm.now.sh/" target="_blank">
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/redux-nasa-api"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>

        {/* Card modal*/}
        <Modal isOpen={this.state.modalTwo} toggle={this.toggleTwo}>
          <ModalBody>
            <a
              href="https://mytools2019-nc83oebj7.now.sh/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img5} style={fullSize} alt="Use My Tool" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>Next Project</ModalTitle>
              <ModalSubTitle />
              <ModalDescription>Next Project</ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleTwo}>
            <Astyle
              href="https://mytools2019-nc83oebj7.now.sh/register"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/use-my-tools/Front-End"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
            <Astyle
              href="https://www.youtube.com/watch?v=7SomB_hSfS0&feature=youtu.be"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>

        {/* Card modal Real Estate*/}
        <Modal
          isOpen={this.state.modalRealEstate}
          toggle={this.toggleRealEstate}
        >
          <ModalBody>
            <a
              href="https://miranda-realestate.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img7} style={fullSize} alt="miranda-realestate" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>Los Angeles Experts</ModalTitle>
              <ModalSubTitle />
              <ModalDescription>
                Built with: React.js , google-map-react, node-sass, reacstrap ,
                bootstrap, redux, redux-thunk, styled-components,
                react-router-dom
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleRealEstate}>
            <Astyle
              href="https://miranda-realestate.netlify.com/"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/portfolio-003-real-estate"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>
      </Element>
    );
  }
}

export default Projects;
