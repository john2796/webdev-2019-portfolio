import styled from "styled-components";
import { ModalHeader } from "reactstrap";

export const ProjectContainer = styled.div`
  background: #ffff;
  padding: 100px 0;
  font-family: "Arvo", serif;

  img {
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ProjectSubHeader = styled.div`
  font-weight: 600;
  color: #131928;
  margin-bottom: 100px auto;
  text-align: center;
  font-size: 2.2rem;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  .header-bar {
    width: 70px;
    height: 4px;
    background: #444649;
    margin: 0 auto;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
`;

export const Thumbnail = styled.img`
  margin: 15px;
  border: 5px solid gray;
  transition: transform 0.2s ease-out 0s;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1.05);
  }
`;

export const FullSize = styled.img`
  /* border: 5px solid black; */
`;

export const Astyle = styled.a`
  color: #444649;
  padding: 0 15px;
  border-radius: 10px;

  &:hover {
    color: #9d967c;
  }
`;

export const ModalTextWrapper = styled.div`
  padding: 0 15px;
`;

export const ModalTitle = styled.h2`
  font-family: "Arvo", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #444649;
`;

export const ModalSubTitle = styled.h4`
  font-family: "Arvo", serif;
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 0.7;
  color: #444649;
`;

export const ModalDescription = styled.p`
  font-family: "Arvo", serif;
  color: #444649;
  font-size: 1.1rem;
`;

export const ModalFooter = styled(ModalHeader)`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
