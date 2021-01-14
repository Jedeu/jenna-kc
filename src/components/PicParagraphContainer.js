import React from 'react'
import styled from 'styled-components'

const StyledExperienceRow = styled.div`
  display: flex;
  margin-bottom: 2.5em;

  & div:nth-child(2) {
    margin-left: 2.5em;
  }
`;

const PicParagraphContainer = ({ children }) => (
 <StyledExperienceRow>
     {children}
 </StyledExperienceRow>
)

export default PicParagraphContainer