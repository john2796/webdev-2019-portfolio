/* eslint-disable jsx-a11y/anchor-has-content */

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
import img5 from "../../assets/05.jpg";
import img7 from "../../assets/07.png";

const thumbSize = { width: "400px", height: "350px" };
const fullSize = { width: "100%" };

class Projects extends Component {
  state = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    seven: false
  };

  _toggleHandler = (card) => () => {
    this.setState({ [card]: !this.state[card] });

  }

  render() {
    const { one, two, three, four, five, seven } = this.state
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
                onClick={this._toggleHandler('seven')}
                alt="project card"
              />
              <Thumbnail
                src={img5}
                style={thumbSize}
                onClick={this._toggleHandler('five')}
                alt="project card"
              />
              <Thumbnail
                src={img3}
                style={thumbSize}
                onClick={this._toggleHandler('three')}
                alt="project card"
              />
              <Thumbnail
                src={img1}
                style={thumbSize}
                onClick={this._toggleHandler('one')}
                alt="project card"
              />
              <Thumbnail
                src={img2}
                style={thumbSize}
                onClick={this._toggleHandler('two')}
                alt="project card"
              />
              <Thumbnail
                src={img4}
                style={thumbSize}
                onClick={this._toggleHandler('four')}
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
        {/* ------------------------------- one -------------------------------*/}
        <Modal isOpen={one} toggle={this._toggleHandler('one')}>
          <ModalBody>
            <a
              href="https://miranda-insta-clone.netlify.com"
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
          <ModalFooter toggle={this._toggleHandler('one')}>
            <Astyle
              href="https://miranda-insta-clone.netlify.com"
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
        {/* ------------------------------- two -------------------------------*/}
        <Modal isOpen={two} toggle={this._toggleHandler('two')}>
          <ModalBody>
            <a
              href="https://miranda-usemytools.netlify.com"
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
          <ModalFooter toggle={this._toggleHandler('two')}>
            <Astyle
              href="https://miranda-usemytools.netlify.com"
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



        {/* ------------------------------- three -------------------------------*/}
        <Modal isOpen={three} toggle={this._toggleHandler('three')}>
          <ModalBody>
            <a
              href="https://miranda-restaurant.netlify.com"
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
          <ModalFooter toggle={this._toggleHandler('three')}>
            <Astyle
              href="https://miranda-restaurant.netlify.com"
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

        {/* ------------------------------- four -------------------------------*/}
        <Modal isOpen={four} toggle={this._toggleHandler('four')}>
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
          <ModalFooter toggle={this._toggleHandler('four')}>
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




        {/* ------------------------------- five -------------------------------*/}
        <Modal
          isOpen={five}
          toggle={this._toggleHandler('five')}
        >
          <ModalBody>
            <a
              href="https://miranda-realestate.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img5} style={fullSize} alt="miranda-realestate" />
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
          <ModalFooter toggle={this._toggleHandler('five')}>
            <Astyle
              href="https://miranda-realestate.netlify.com"
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



        {/* ------------------------------- seven -------------------------------*/}
        <Modal isOpen={seven} toggle={this._toggleHandler('seven')}>
          <ModalBody>
            <a
              href="https://moviedb19.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize src={img7} style={fullSize} alt="Use My Tool" />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: "0" }}>
            <ModalTextWrapper>
              <ModalTitle>MovieDb19</ModalTitle>
              <ModalSubTitle />
              <ModalDescription>
                <ul>
                  <li>
                    Built with : <br />
                    - themoviedb api , react.js, redux, wow.js.
                </li>
                  <li>
                    description: <br />
                    - the best movie app references for movies, actors, directors, and TV series . included are photos, biographies, trailers, descriptions, reviews, movie showtimes, TV listings, and more.
                  </li>
                  <li>
                    Awesome company: <br />
                    - this project is still under development 👾
                  </li>
                </ul>
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this._toggleHandler('seven')}>
            <Astyle
              href="https://moviedb19.netlify.com/"
              target="_blank"
            >
              <i className="fas fa-globe fa-2x" />
            </Astyle>{" "}
            <Astyle
              href="https://github.com/john2796/moviedb19"
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
