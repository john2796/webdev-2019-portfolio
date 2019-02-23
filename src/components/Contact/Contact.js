import React, { Component } from "react";
import { Form, FormGroup, Input, Spinner } from "reactstrap";
import { Element } from "react-scroll";
import axios from "axios";

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
import Alert from "react-s-alert";
import Button from "../Button/Button";
class Contact extends Component {
  state = { name: "", email: "", message: "", loading: false, errors: {} };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, email, message } = this.state;
    axios
      .post("https://jbmiranda-server-01.herokuapp.com/api/contact", {
        name,
        email,
        message
      })
      .then(() => {
        this.setState({ loading: false });
      })
      .then(mail => {
        console.log(mail);
        Alert.success(
          `Hey! Thanks for contacting me. I'll get back to you soon as I can.`
        );
      })
      .catch(err => {
        this.setState({ errors: err.response.data, loading: false });
      });
    this.setState({ errors: {}, name: "", email: "", message: "" });
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, errors: {} });

  render() {
    const { name, email, message, errors } = this.state;

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
            {this.state.loading && (
              <Spinner
                md="auto"
                style={{ margin: "0 auto", display: "block" }}
                color="success"
              />
            )}
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
                type="submit"
                onClick={this.handleSubmit}
              />
            </ButtonWrapper>
            <SocialWrapper>
              <Astyle
                href="https://github.com/john2796"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Astyle>

              <Astyle
                href="https://codepen.io/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen" />
              </Astyle>
              <Astyle
                href="mailto:jbmiranda22796@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-envelope" />
              </Astyle>
              <Astyle
                href="https://www.linkedin.com/in/john-benedict-miranda-7b2357180/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </Astyle>
            </SocialWrapper>
            <CopyrightText>John Benedict Miranda ©2019</CopyrightText>
          </ContentWrapper>
        </ContactContainer>
        <div hidden>
          {errors.message && Alert.error(`${errors.message}`)}
          {errors.email && Alert.error(errors.email)}
          {errors.name && Alert.error(errors.name)}
        </div>
      </Element>
    );
  }
}

export default Contact;
