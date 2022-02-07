import { Link } from "gatsby"
import React, { useState } from "react"
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
    margin-left: auto;
    margin-right: auto;
  }

  @media(max-width:590px) {
    padding: 24px 40px;
  }

  @media(max-width:389px) {
    flex-wrap: wrap;
    height: ${({ open }) => open ? '320px' : '64px'};
  }
`;

const StyledMobileContainer = styled.div`
  display: none;
  @media(max-width:389px) {
    display: block;
  }
`;

const StyledMobileLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLinksContainer = styled.div`
  & a:nth-child(2) {
    margin-right: 40px;
  }

  @media(max-width:389px) {
    display: none;
  }
`;

const StyledPopOut = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 100%;
  height: 520px;
  z-index: 2;
  background: white;
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media(max-width:389px) {
    font-size: 0.875em;
  }
`;

const StyledHamburger = styled.div`
  width: 24px;
  height: 10px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #4C4C4C;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 7px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 14px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  span:nth-child(3) {
    top: 21px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  ${({ shouldOpen }) => shouldOpen && `
    span:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 4px;
      left: 6px;
    }

    span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }

    span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 21px;
      left: 6px;
    }
  `}
`;

const Header = ({ location }) => {
  const [open, setOpen] = useState(false);
  const notOnWorkPage = location.pathname !== "/work";
  const notOnAboutPage = location.pathname !== "/about";

  const displayNormalHeader = () => (
    <StyledLinksContainer>
      <StyledLink
        to='/work'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
        animate={notOnWorkPage}
        partiallyActive
      >
        Work
      </StyledLink>
      <Link to='/work' style={{ textDecoration: 'none' }}> &mdash;</Link>

      <StyledLink
        to='/about'
        activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
        animate={notOnAboutPage}
      >
        About
        </StyledLink>
      <Link to='/about' style={{ textDecoration: 'none' }}> &mdash;</Link>
    </StyledLinksContainer>
  )

  const displayMobileHeader = () => (
    <StyledMobileContainer>
      <StyledHamburger
        onClick={() => setOpen(!open)}
        shouldOpen={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburger>
      { open &&
        <StyledPopOut>
          <StyledMobileLinksContainer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginLeft: '24px', marginBottom: '8px' }}>
                <StyledLink
                  to='/work'
                  activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
                  partiallyActive
                >
                  Work
                </StyledLink>
                <StyledLink to='/work'> &mdash;</StyledLink>
              </div>

              <StyledLink
                to='/work/mediavalet'
                activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
                partiallyActive
                style={{ marginBottom: '8px' }}
              >
                MediaValet
              </StyledLink>
              <StyledLink
                to='/work/neighbourhood'
                activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
                partiallyActive
                style={{ marginBottom: '8px' }}
              >
                Neighbourhood
              </StyledLink>
              <StyledLink
                to='/work/electronic-arts'
                activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
                partiallyActive
                style={{ marginBottom: '24px' }}
              >
                Electronic Arts
              </StyledLink>
            </div>

            <div>
              <StyledLink
                to='/about'
                activeStyle={{ borderBottom: '2px solid #F5B4A2' }}
              >
                About
              </StyledLink>
              <StyledLink to='/about'> &mdash;</StyledLink>
            </div>
          </StyledMobileLinksContainer>
        </StyledPopOut>
      }
    </StyledMobileContainer>
  )

  return (
    <StyledHeader open={open}>
      <StyledLink to='/work' style={{ minWidth: '85px' }}>
        <Logo />
      </StyledLink>
      {/* Normal and Mobile will interchange at breakpoint 389px */}
      {displayNormalHeader()}
      {displayMobileHeader()}
    </StyledHeader>
  )
}

export default Header
