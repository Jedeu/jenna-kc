import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import PropTypes from "prop-types"

const StyledImage = styled(Img)`
  border: 1px solid #B7B7B7;
  position: relative;
  display: inline-block;
  border-bottom: none;

  ${(screenshot) => screenshot && `&:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    background-image: linear-gradient(to right, #F5B4A2 70%, #B7B7B7 30%)
  }`}
`;

const ImageWithCaption = ({ source, content, screenshot }) => (
  <div>
    <StyledImage fixed={source} screenshot={screenshot} />
    <div style={{ fontSize: '0.75em', paddingLeft: '1em' }}>{content}</div>
  </div>
)

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
  screenshot: PropTypes.bool,
}

export default ImageWithCaption