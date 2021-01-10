import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
`;

const StyledLinksContainer = styled.div`
  & a:first-child {
    margin-right: 40px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  color: #4C4C4C;
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to='/' style={{ minWidth: '85px' }}>
      <Logo  />
    </StyledLink>
    <StyledLinksContainer>
      <StyledLink
        to='/'
        activeStyle={{ textDecoration: 'underline #F5B4A2', textDecorationThickness: '2px' }}
      >
        Work &mdash;
      </StyledLink>
      <StyledLink
        to='/about'
        activeStyle={{ textDecoration: 'underline #F5B4A2', textDecorationThickness: '2px' }}
      >
        About &mdash;
      </StyledLink>
    </StyledLinksContainer>
  </StyledHeader>
)

export default Header
