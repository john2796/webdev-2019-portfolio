import React, { Component } from "react";
import PDF from "../PDF/PDF";
import Button from "../Button/Button";
import { Element } from "react-scroll";

import {
  AboutContainer,
  ContentWrapper,
  AboutHeader,
  IconContainer,
  Icon,
  IconTextWrapper,
  IconText,
  IconHeader,
  BioWrapper,
  BioTextWrapper,
  ProfilePic,
  BioText,
  Hexagon
} from "./AboutStyles";
class About extends Component {
  state = {
    modal: false
  };

  togglePDF = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Element name="About">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>
              ABOUT
              <div className="header-bar" />
            </AboutHeader>
            <IconContainer>
              <IconTextWrapper>
                <Hexagon>
                  <Icon className="fas fa-tachometer-alt" />
                </Hexagon>
                <IconHeader>Performant</IconHeader>
                <IconText>
                  Blazing fast load times & lag-free interaction
                </IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Hexagon>
                  <Icon className="fas fa-mobile-alt" />
                </Hexagon>
                <IconHeader>Responsive</IconHeader>
                <IconText>Sleek & elegant designs for any device size</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Hexagon>
                  <Icon className="fas fa-lightbulb" />
                </Hexagon>

                <IconHeader>Intuitive</IconHeader>
                <IconText>User-friendly, dynamic & accessible UI/UX</IconText>
              </IconTextWrapper>

              <IconTextWrapper>
                <Hexagon>
                  <Icon className="fas fa-rocket" />
                </Hexagon>
                <IconHeader>Scalable</IconHeader>
                <IconText>Unlimited user base growth potential</IconText>
              </IconTextWrapper>
            </IconContainer>

            <BioWrapper>
              <ProfilePic src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxSValmtOKk8mJlY6NrJmmpUFj07emXVnYtnDL5bzkn48qRne" />
              <BioTextWrapper>
                <BioText>
                  Hello. I'm John, a web developer in San Diego. I strive to
                  learn, improve, and challenge myself every day. What gets me
                  up each morning is knowing the website I create today is
                  better than the website I created yesterday. I want to work
                  with inspiring people who feel the same way I do.
                </BioText>
                <Button
                  name="View Resume"
                  color="#131928"
                  border="2px solid #444649"
                  hoverFontColor="#FEFFFE"
                  bgColor="#131928"
                  borderColor="#444649"
                  width="180px"
                  fontSize="1.2rem"
                  onClick={this.togglePDF}
                />
              </BioTextWrapper>
            </BioWrapper>
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
