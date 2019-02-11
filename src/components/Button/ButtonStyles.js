import styled from "styled-components";

export const CustomButton = styled.div`
  width: ${props => props.width};
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  border: ${props => props.border};
  margin: 10px;
  padding: 10px;
  font-size: ${props => props.fontSize};
  font-family: "Roboto Slab", serif;
  &:hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.hoverFontColor};
    cursor: pointer;
    border-color: ${props => props.borderColor};
  }

  @media (max-width: 600px) {
    font-size: ${props => props.mobileFontSize};
    width: ${props => props.mobileWidth};
    height: ${props => props.mobileHeight};
  }
`;
