import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 24px 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  height: 64px;

  @media(max-width: 1024px) {
    padding: 24px 40px;
  }

  @media(max-width: 1023px) {
    padding: 24px 0;
  }

  @media(max-width:590px) {
    padding: 24px 40px;
  }
`;

const StyledLinksContainer = styled.div`
  & a:nth-child(2) {
    margin-right: 40px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  color: #4C4C4C;
  position: relative;

  ${({ animate }) => animate && `
    &:before {
      content: "";
      position: absolute;
      width: 0%;
      height: 1px;
      bottom: 0;
      border-bottom: 2px solid #F5B4A2;
    }

    &:hover:before {
      width: 100%;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    }
  `}
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to='/work' style={{ minWidth: '85px' }}>
      <Logo  />
    </StyledLink>
    <StyledLinksContainer>
    <StyledLink
        to='/work'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
        partiallyActive={true}
        animate
      >
        Work
      </StyledLink>
      <StyledLink to='/work'> &mdash;</StyledLink>

      <StyledLink
        to='/about'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
        animate
      >
        About
      </StyledLink>
      <StyledLink to='/about'> &mdash;</StyledLink>
    </StyledLinksContainer>
  </StyledHeader>
)

export default Header
