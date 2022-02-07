import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
padding: 0 80px 80px;

@media(max-width: 1024px) {
  padding: 0 40px;
}

@media(max-width: 952px) {
  padding: 0 24px;
}

@media(max-width: 951px) {
  padding: 0 100px;
}

@media(max-width: 770px) {
  padding: 0 24px;
}

@media(max-width: 399px) {
  padding: 0;
}
`;

const CaseStudyContainer = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)

export default CaseStudyContainer