import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  color: #4C4C4C;
  font-size: 1.125em;
  display: flex;
  align-items: center;
`;

const WorkPageHeader = ({ chevronFixed, company, title }) => (
  <Container>
    <StyledLink to='/work'>
      <Img fixed={chevronFixed} />
      <span style={{ marginLeft: '6px' }}>Back</span>
    </StyledLink>
    <span style={{ fontSize: '1.5em' }}>{company}</span>
    <span style={{ fontSize: '1.125em', marginLeft: '16px' }}>{title}</span>
  </Container>
)

export default WorkPageHeader