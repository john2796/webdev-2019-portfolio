import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fffdff;
  font-family: "Open Sans";
  padding: 100px 0;
  zoom: 80%;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeader = styled.div`
  font-weight: 600;
  color: #131928;
  margin-bottom: 70px;
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0px;
  }
  .header-bar {
    width: 64px;
    height: 4px;
    background: #444649;
    margin: 7px auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const IconTextWrapper = styled.div`
  max-width: 220px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;

  @media (max-width: 900px) {
    max-width: 290px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const IconHeader = styled.div`
  color: #131928;
  opacity: 0.8;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 5px;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const IconText = styled.div`
  text-align: center;
  color: #616161;
  padding-top: 5px;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.i`
  color: #fefffe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 4%;
  }
`;

export const ProfilePic = styled.img`
  width: 200px;
  border-radius: 50%;
  margin: 0 35px 20px 35px;
`;

export const BioTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  max-width: 655px;

  @media (max-width: 800px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const BioText = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 1.35;
  padding: 0 15px;
  color: rgb(51, 51, 51);

  @media (max-width: 800px) {
    font-size: 1.3rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
    margin: 20px 0;
  }
`;

export const Hexagon = styled.div`
  position: relative;
  width: 120px;
  height: 69.28px;
  background-color: #b3dec1;
  margin: 34.64px 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 34.64px solid #b3dec1;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 34.64px solid #b3dec1;
  }
  i {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white !important;
    font-size: 3rem;
  }
`;
