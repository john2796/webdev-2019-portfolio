import React, { Component } from "react";
import { Element, scroller } from "react-scroll";
import NavButton from "../Button/Button";
import Particles from "../Particles/Particles";
import {
  HomeContainer,
  HeaderContainer,
  TextContainer,
  NameText,
  JobText
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
              <NameText>John Benedict Miranda</NameText>
              <JobText>Full Stack Web Developer</JobText>
            </TextContainer>
            <NavButton
              name="Explore"
              color="#c0c0c0"
              border="2px solid #c0c0c0"
              bgColor="#9d967c"
              hoverFontColor="#182327"
              borderColor="#9d967c"
              onClick={this.smoothScroll}
              fontSize="1.4rem"
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
