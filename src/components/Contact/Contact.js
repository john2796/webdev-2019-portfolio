import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Element } from "react-scroll";

import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  ContactForm,
  ButtonWrapper,
  SocialWrapper,
  Astyle,
  CopyrightText
} from "./ContactStyles";

import Button from "../Button/Button";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = { name: "", email: "", message: "" };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;
    const valid =
      name.length > 0 &&
      email.length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      message.length > 0;

    if (valid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() =>
          alert(
            `Hey! Thanks for contacting me. I'll get back to you soon as I can.`
          )
        )
        .catch(error =>
          alert(
            `Oops! Something went wrong. Contact me at ${
              process.env.REACT_APP_EMAIL
            }.`
          )
        );

      this.setState({ name: "", email: "", message: "" });
    } else if (name.length <= 0) {
      alert("Please enter your name.");
    } else if (email.length <= 0) {
      alert("Please enter your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else if (message.length <= 0) {
      alert("Please enter your message.");
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <Element name="Contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
          style={{ background: "#182327" }}
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
        </svg>
        <ContactContainer>
          <ContentWrapper>
            <ContactHeader>
              Contact
              <div className="header-bar" />
            </ContactHeader>
            <ContactSubHeader>Want to work together?</ContactSubHeader>
            <ContactForm>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    bsSize="lg"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    bsSize="lg"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    value={message}
                    placeholder="Message"
                    bsSize="lg"
                    style={{ height: "200px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
            </ContactForm>
            <ButtonWrapper>
              <Button
                name="Send Message"
                color="#c0c0c0"
                border="2px solid #E5FCF5"
                bgColor="#131928"
                hoverFontColor="#FEFFFE"
                borderColor="#B3DEC1"
                width="180px"
                fontSize="1.2rem"
                onClick={this.handleSubmit}
              />
            </ButtonWrapper>
            <SocialWrapper>
              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </Astyle>

              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </Astyle>

              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium" />
              </Astyle>
              <Astyle
                href={`mailto:${process.env.REACT_APP_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope" />
              </Astyle>
            </SocialWrapper>
            <CopyrightText>John Benedict Miranda ©2019</CopyrightText>
          </ContentWrapper>
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;
