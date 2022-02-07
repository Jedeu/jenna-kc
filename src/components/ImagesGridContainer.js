import React from 'react'
import styled from 'styled-components'

const StyledImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 480px 480px;
  grid-template-rows: 386px 386px;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  margin-top: 40px;

  @media(max-width: 1095px) {
    grid-template-columns: 1fr 1fr;
    max-width: 100vw;
  }

  @media(max-width: 951px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const ImagesGridContainer = ({ children }) => (
  <StyledImagesGrid>
    {children}
  </StyledImagesGrid>
)

export default ImagesGridContainer