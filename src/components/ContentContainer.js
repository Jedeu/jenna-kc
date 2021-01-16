import React from 'react'
import styled from 'styled-components'

const StyledContentContainer = styled.div`
  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 840px;
    font-size: 1.125em;
  }
`;

const ContentContainer = ({ children }) => (
  <StyledContentContainer>
    {children}
  </StyledContentContainer>
)

export default ContentContainer