import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  color: #333;
  transition: 0.3s;

  &:hover {
    color: #007bff;
  }
`;

function Header() {
  return (
    <Nav>
      <Logo>LOGO</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Nav>
  );
}

export default Header;
