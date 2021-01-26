import React from 'react'
import styled from 'styled-components'

const StyledImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 480px 480px;
  grid-template-rows: 386px 386px;
  grid-row-gap: 24px;
  grid-column-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  margin-top: 40px;

  @media(max-width: 1024px) {
    grid-template-columns: 452px 452px;
    grid-template-rows: 360px 360px;
  }
`;

const ImagesGridContainer = ({ children }) => (
  <StyledImagesGrid>
    {children}
  </StyledImagesGrid>
)

export default ImagesGridContainer