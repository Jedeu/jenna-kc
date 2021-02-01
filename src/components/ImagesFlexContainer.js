import React from 'react'
import styled from 'styled-components'

const StyledImagesContainer = styled.div`
  display: flex;
  margin-bottom: 2.5em;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  & > div:nth-child(2) {
    margin-left: 2.5em;
  }

  @media(max-width: 951px) {
    flex-direction: column;
    align-items: center;

    & > div:nth-child(2) {
      margin-left: 0;
      margin-top: 2.5em;
    }
  }
`;

const ImagesFlexContainer = ({ children }) => (
  <StyledImagesContainer>
    {children}
  </StyledImagesContainer>
)

export default ImagesFlexContainer