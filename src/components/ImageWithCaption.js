import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from "prop-types"

const StyledImage = styled(Img)`
  position: relative;
  display: inline-block;

  ${({ screenshot }) => screenshot && `border: 1px solid #B7B7B7;`}
`;

const StyledContainer = styled.div`
  width: 480px;
  flex-shrink: 0;

  @media(max-width: 1024px) {
    width: 452px;
  }
`;

const ImageWithCaption = ({ source, content, screenshot }) => (
  <StyledContainer>
    <StyledImage fluid={source} style={{ width: '100%' }} screenshot={screenshot} />
    <div style={{ fontSize: '0.75em', paddingLeft: '1em' }}>{content}</div>
  </StyledContainer>
)

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
  screenshot: PropTypes.bool,
}

export default ImageWithCaption