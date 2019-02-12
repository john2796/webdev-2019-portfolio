import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Element } from "react-scroll";

import {
  ProjectContainer,
  ProjectHeader,
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
import anchored from "../../assets/01.jpg";
import cryptoGym from "../../assets/02.jpg";
import profJones from "../../assets/03.jpg";
import bcad from "../../assets/04.jpg";
import reactMovies from "../../assets/05.jpg";
import walletWatcher from "../../assets/06.jpg";

const thumbSize = { width: "370px", height: "217px" };
const fullSize = { width: "100%" };

class Projects extends Component {
  state = {
    modalAnchored: false,
    modalCrytpoGym: false,
    modalProfJones: false,
    modalBCAD: false,
    modalReactMovies: false,
    modalWalletWatcher: false
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

  toggleProfJones = () => {
    this.setState({
      modalProfJones: !this.state.modalProfJones
    });
  };

  toggleBCAD = () => {
    this.setState({
      modalBCAD: !this.state.modalBCAD
    });
  };

  toggleReactMovies = () => {
    this.setState({
      modalReactMovies: !this.state.modalReactMovies
    });
  };

  toggleWalletWatcher = () => {
    this.setState({
      modalWalletWatcher: !this.state.modalWalletWatcher
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
                src={anchored}
                style={thumbSize}
                onClick={this.toggleAnchored}
                alt="Anchored"
              />
              <Thumbnail
                src={cryptoGym}
                style={thumbSize}
                onClick={this.toggleCryptoGym}
                alt="CryptoGym"
              />
              <Thumbnail
                src={profJones}
                style={thumbSize}
                onClick={this.toggleProfJones}
                alt="Professor Jones Music"
              />
              <Thumbnail
                src={bcad}
                style={thumbSize}
                onClick={this.toggleBCAD}
                alt="BC/AD"
              />
              <Thumbnail
                src={reactMovies}
                style={thumbSize}
                onClick={this.toggleReactMovies}
                alt="Need to change later"
              />
              <Thumbnail
                src={walletWatcher}
                style={thumbSize}
                onClick={this.toggleWalletWatcher}
                alt="need to change later"
              />
            </ThumbnailContainer>
            <ButtonWrapper>
              <a
                href="https://jeremyjones.hackhivebeta.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              />
            </ButtonWrapper>
          </ContentWrapper>
        </ProjectContainer>

        {/* Modal Anchored*/}
        <Modal isOpen={this.state.modalAnchored} toggle={this.toggleAnchored}>
          <ModalBody>
            <a
              href="https://instagram-clone-lilsgxfc1.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={anchored} style={fullSize} alt="Anchored" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>Instagram</ModalTitle>
              <ModalSubTitle>A Instagram clone</ModalSubTitle>
              <ModalDescription>
                built with React, Redux, Node.js, Express, and Mlab.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleAnchored}>
            <Astyle
              href="https://instagram-clone-lilsgxfc1.now.sh/"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/react-insta-client"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>

        {/* Modal CryptoGym */}
        <Modal isOpen={this.state.modalCrytpoGym} toggle={this.toggleCryptoGym}>
          <ModalBody>
            <a
              href="https://mytools2019-nc83oebj7.now.sh/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={cryptoGym} style={fullSize} alt="Crypto Gym" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
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

        {/* Modal Professor Jones Music */}
        <Modal isOpen={this.state.modalProfJones} toggle={this.toggleProfJones}>
          <ModalBody>
            <a
              href="https://miranda-restaurant-3wd9nqkmp.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize
                src={profJones}
                style={fullSize}
                alt="Professor Jones Music"
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
          <ModalFooter toggle={this.toggleProfJones}>
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

        {/* Modal BCAD */}
        <Modal isOpen={this.state.modalBCAD} toggle={this.toggleBCAD}>
          <ModalBody>
            <a
              href="https://redux-nasa-fwmiybrxm.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize
                src={bcad}
                style={fullSize}
                alt="Blockchain Artifact Database"
              />
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
        {/* Modal React Movies */}
        <Modal
          isOpen={this.state.modalReactMovies}
          toggle={this.toggleReactMovies}
        >
          <ModalBody>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FullSize src={reactMovies} style={fullSize} alt="React Movies" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>React Movies</ModalTitle>
              <ModalSubTitle>
                An app that displays details & trailers of films
              </ModalSubTitle>
              <ModalDescription>
                React Movies is a UI-focused app that allows users to search for
                in real-time any film ever published to the Movie DB with
                blazing fast rendering. A user can click on the movie card,
                watch the trailer and get more details. This app was built with
                React with the Movie Database API integration.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleReactMovies}>
            <Astyle href="/" target="_blank">
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle href="/" target="_blank">
              <i className="fab fa-github fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>

        {/* Modal WalletWatcher */}
        <Modal
          isOpen={this.state.modalWalletWatcher}
          toggle={this.toggleWalletWatcher}
        >
          <ModalBody>
            <a
              href="https://walletwatcher.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize
                src={walletWatcher}
                style={fullSize}
                alt="React Movies"
              />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>WalletWatcher</ModalTitle>
              <ModalSubTitle>
                An app that monitors Ethereum addresses
              </ModalSubTitle>
              <ModalDescription>
                WalletWatcher was a Lambda School Hackathon 2018 project that
                was awarded a third place prize and "most likely to become a
                startup." It allows users to monitor any Ethereum-based address
                and receive SMS notifications. It was built with React, Express,
                Node.js, and MongoDB with Twilio and Etherscan API integration.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleWalletWatcher}>
            <Astyle href="https://walletwatcher.netlify.com" target="_blank">
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/wallet-watcher/wallet-watcher"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
            <Astyle
              href="https://www.youtube.com/watch?v=DmIB3gslWdg"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x" />
            </Astyle>
          </ModalFooter>
        </Modal>
      </Element>
    );
  }
}

export default Projects;
