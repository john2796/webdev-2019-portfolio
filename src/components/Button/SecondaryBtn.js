import styled from 'styled-components';

const SecondaryBtn = styled.a`
  display: block;
  border-style: none;
  border-radius: 4px;
  left: 459px;
  top: 2621px;
  z-index: 38;
  width: 190px;
  height: 53px;
  position: absolute;
  background: rgba(0, 203, 132, 1);
  box-shadow: none;
  text-shadow: none;
  color: #fff;

  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  font-family: Open Sans;
  font-style: normal;
  text-align: center;
  background-repeat: no-repeat;
`;

export const SecondaryBtn = ({ name }) => <SecondaryBtn>{name}</SecondaryBtn>;
