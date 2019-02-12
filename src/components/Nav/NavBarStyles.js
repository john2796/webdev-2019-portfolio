import styled from "styled-components";
import { DropdownMenu } from "reactstrap";

export const NavBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background: #182327;
  border-bottom: 3px solid #b3dec1;
  font-family: "Arvo", serif;
`;

export const NavLinkWrapper = styled.div`
  max-width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    max-width: none;
    justify-content: flex-end;
  }
  @media (min-width: 1000px) {
    margin-left: 100px;
  }
`;

export const NavLink = styled.div`
  color: #fefffe;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #b3dec1;
  }

  @media (max-width: 800px) {
    padding: 10px 20px;
  }
`;

export const Hamburger = styled.div`
  font-size: 1.85rem;

  color: #fffdff;
  margin-right: 25px;

  &:hover {
    cursor: pointer;
    color: #b3dec1;
  }
`;

export const DropdownMenuWrapper = styled(DropdownMenu)`
  @media (max-width: 800px) {
    width: 100vw;
    background: #182327;
    border-radius: 0;
    margin-top: 0;
  }
`;
