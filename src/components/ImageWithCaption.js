import React from 'react'
import Img from "gatsby-image"
import PropTypes from "prop-types"

const ImageWithCaption = ({ source, content }) => (
  <div>
    <Img fixed={source}/>
    <div style={{ fontSize: '0.75em', paddingLeft: '1em' }}>{content}</div>
  </div>
)

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
}

export default ImageWithCaption