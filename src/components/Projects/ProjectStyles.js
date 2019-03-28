import styled from 'styled-components';
import { ModalHeader } from 'reactstrap';

export const ProjectContainer = styled.div`
  background: #ffff;
  padding: 100px 0;
  font-family: 'Open Sans';

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
  font-size: 1.8rem;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  .header-bar {
    width: 64px;
    height: 4px;
    background: #444649;
    margin: 7px auto;
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
  transition: transform 0.2s ease-out 0s;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1.05);
  }
`;

export const FullSize = styled.img``;

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
  font-family: 'Open Sans';
  font-size: 1.6rem;
  font-weight: 600;
  color: #444649;
`;

export const ModalSubTitle = styled.h4`
  font-family: 'Open Sans';
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 0.7;
  color: #444649;
`;

export const ModalDescription = styled.p`
  font-family: 'Open Sans';
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

export const ProjectSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
  display: flex;
  justify-content: flex-start;

  img {
    max-width: 100%;
  }

  @media (max-width: 900px) {
    max-width: 800px;
  }
  @media (max-width: 600px) {
    background: red;
    flex-direction: column;
  }

  .left-child {
  }

  .project-content {
    width: 70%;
    margin: 0 auto;
  }
  .project-content span {
    font-size: 48px;
    font-family: 'Open Sans';
    color: rgb(23, 123, 248);
    font-weight: 600;
  }
  .project-content p {
    font-family: 'Open Sans';
    font-size: 18px;
    color: rgb(51, 51, 51);
    font-weight: 600;
  }
  .middle-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    .design-circle {
      width: 50px;
      margin-top: 100px;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  .right-child {
  }
`;
