import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import backChevron from '../images/back.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  @media(max-width: 951px) {
    max-width: 560px;
  }

  @media(max-width: 590px) {
    padding: 0 24px;
  }

  @media(max-width: 399px) {
    justify-content: center;
    max-width: 100vw;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  color: #4C4C4C;
  font-size: 1.125em;
  display: flex;
  align-items: center;

  @media(max-width: 399px) {
    display: none;
  }
`;

const WorkPageHeader = ({ company, title }) => (
  <Container>
    <StyledLink to='/work'>
      <span style={{ fontSize: '24px' }}> &lt; </span>
      <span style={{ marginLeft: '3px' }}>Back</span>
    </StyledLink>
    <span style={{ fontSize: '1.5em' }}>{company}</span>
    <span style={{ fontSize: '1.125em', marginLeft: '16px' }}>{title}</span>
  </Container>
)

export default WorkPageHeader