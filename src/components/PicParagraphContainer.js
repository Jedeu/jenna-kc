import React from 'react'
import styled from 'styled-components'

const StyledExperienceRow = styled.div`
  display: flex;
  margin-bottom: 2.5em;

  & div:nth-child(2) {
    margin-left: 2.5em;
  }

  @media(max-width:1023px) {
    flex-wrap: wrap;
    justify-content: center;

    & div:nth-child(2) {
      margin-left: 0;
      margin-top: 24px;
    }

    ${({ shouldReverse }) => shouldReverse && `
      flex-direction: row-reverse;

      & div:first-child {
        order: 2;
      }

      & div:nth-child(2) {
        margin-top: 0;
        margin-bottom: 24px;
        order: 1;
      }
    `}
  }
`;

const PicParagraphContainer = ({ children, shouldReverse }) => (
 <StyledExperienceRow shouldReverse={shouldReverse} >
     {children}
 </StyledExperienceRow>
)

export default PicParagraphContainer