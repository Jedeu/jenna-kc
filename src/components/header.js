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
  & a:nth-child(2) {
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
    <StyledLink to='/work' style={{ minWidth: '85px' }}>
      <Logo  />
    </StyledLink>
    <StyledLinksContainer>
    <StyledLink
        to='/work'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
        partiallyActive={true}
      >
        Work
      </StyledLink>
      <StyledLink to='/work'> &mdash;</StyledLink>

      <StyledLink
        to='/about'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
      >
        About
      </StyledLink>
      <StyledLink to='/about'> &mdash;</StyledLink>
    </StyledLinksContainer>
  </StyledHeader>
)

export default Header
