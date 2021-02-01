import React from 'react'
import styled from 'styled-components'

const StyledContentContainer = styled.div`
  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 840px;
    font-size: 1.125em;
  }

  @media(max-width: 399px) {
    padding: 0 24px;
  }
`;

const ContentContainer = ({ children }) => (
  <StyledContentContainer>
    {children}
  </StyledContentContainer>
)

export default ContentContainer