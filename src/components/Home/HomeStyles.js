import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #182327;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");
  font-family: "Roboto Slab", serif;
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
  font-size: 3rem;
  padding-bottom: 5px;
  font-weight: 500;
  color: #fefffe;
  line-height: 1.2;
  span {
    color: #b3dec1;
  }
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
