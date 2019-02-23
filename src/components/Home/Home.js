import React, { Component } from "react";
import { Element, scroller } from "react-scroll";
import NavButton from "../Button/Button";
import Particles from "../Particles/Particles";
import {
  HomeContainer,
  HeaderContainer,
  TextContainer,
  NameText
} from "./HomeStyles";

class Home extends Component {
  smoothScroll() {
    scroller.scrollTo("About", {
      duration: 500,
      delay: 1,
      smooth: true
    });
  }

  render() {
    return (
      <Element name="Home">
        <HomeContainer>
          <Particles />
          <HeaderContainer>
            <TextContainer>
              <NameText>
                Hello, I'm
                <span> John Benedict Miranda.</span>
                <br /> I'm a full stack web developer
              </NameText>
            </TextContainer>
            <NavButton
              name="Explore"
              color="#c0c0c0"
              border="2px solid #c0c0c0"
              bgColor="#131928"
              hoverFontColor="#FEFFFE"
              borderColor="#E5FCF5"
              onClick={this.smoothScroll}
              fontSize="1.2rem"
              width="160px"
              mobileFontSize="1.2rem"
              mobileWidth="140px"
              mobileHeight="40px"
            />
          </HeaderContainer>
        </HomeContainer>
      </Element>
    );
  }
}

export default Home;
