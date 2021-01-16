import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from "prop-types"

const StyledImage = styled(Img)`
  border: 1px solid #B7B7B7;
  position: relative;
  display: inline-block;
`;

const ImageWithCaption = ({ source, content }) => (
  <div style={{ width: '480px' }}>
    <StyledImage fluid={source} style={{ width: '100%' }} />
    <div style={{ fontSize: '0.75em', paddingLeft: '1em' }}>{content}</div>
  </div>
)

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
}

export default ImageWithCaption