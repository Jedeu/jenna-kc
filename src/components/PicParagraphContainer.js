import React from 'react'
import styled from 'styled-components'

const StyledExperienceRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const PicParagraphContainer = ({ children }) => (
 <StyledExperienceRow>
     {children}
 </StyledExperienceRow>
)

export default PicParagraphContainer