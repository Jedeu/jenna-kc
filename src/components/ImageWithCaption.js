import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from "prop-types"

const StyledImage = styled(Img)`
  position: relative;
  display: inline-block;

  ${({ screenshot }) => screenshot && `border: 1px solid #B7B7B7;`}
`;

const ImageWithCaption = ({ source, content, screenshot }) => (
  <div style={{ width: '480px' }}>
    <StyledImage fluid={source} style={{ width: '100%' }} screenshot={screenshot} />
    <div style={{ fontSize: '0.75em', paddingLeft: '1em' }}>{content}</div>
  </div>
)

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
  screenshot: PropTypes.bool,
}

export default ImageWithCaption