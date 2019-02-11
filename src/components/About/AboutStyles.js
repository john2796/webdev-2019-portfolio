import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fffdff;
  font-family: "Roboto Slab", serif;

  padding: 100px 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeader = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #444649;
  opacity: 0.9;

  padding: 0 0 40px 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const AboutSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #444649;
  opacity: 0.7;
  margin-top: 100px;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  border: 1px solid red;

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
    max-width: 190px;
  }
`;

export const IconHeader = styled.div`
  color: #444649;
  opacity: 0.7;
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const IconText = styled.div`
  text-align: center;
  color: #616161;
  padding-top: 5px;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Icon = styled.i`
  color: #444649;
  /* padding: 5px 80px; */
  opacity: 0.9;
  font-size: 5em;

  @media (max-width: 600px) {
    font-size: 4em;
    margin-top: 29px;
  }
`;

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProfilePic = styled.img`
  width: 200px
  border-radius: 50%
  border: 3px solid #444649;
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
  }
`;

export const BioText = styled.div`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 5px;
  padding: 0 15px;
  color: #444649;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;
