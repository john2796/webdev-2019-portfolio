import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #182327;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Arvo:400,700");
  font-family: "Arvo", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 35%;
`;

export const TextContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const NameText = styled.div`
  -webkit-font-smoothing: antialiased;
  font-size: 4.5rem;
  padding-bottom: 5px;
  font-weight: 700;
  color: #9d967c;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;
export const JobText = styled.div`
  font-size: 3rem;
  color: #c0c0c0;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
