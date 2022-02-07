import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from "prop-types"

const StyledImage = styled(Img)`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  ${({ screenshot }) => screenshot && `border: 1px solid #B7B7B7;`}
`;

const StyledContainer = styled.div`
  width: 480px;
  flex-shrink: 0;

  @media(max-width: 1095px) {
    flex-shrink: 1;
    width: 100%;
  }

  @media(max-width: 951px) {
    width: 560px;
  }

  @media(max-width: 590px) {
    width: 100vw;
  }
`;

const StyledCaption = styled.div`
  font-size: 0.75em;
  padding-left: 1em;

  @media(max-width: 590px) {
    padding-left: 1.5em;
  }
`;

const ImageWithCaption = ({ source, content, screenshot, isGif, alt, style }) => {
  const renderImgEl = () => {
    if (isGif) {
      return <img style={style} src={source} alt={alt}/>;
    }
    return  <StyledImage fluid={source} style={style} screenshot={screenshot} />;
  }
  return (
    <StyledContainer>
      {renderImgEl()}
      <StyledCaption>{content}</StyledCaption>
    </StyledContainer>
  )
}

ImageWithCaption.propTypes = {
  content: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
  screenshot: PropTypes.bool,
  isGif: PropTypes.bool,
  alt: PropTypes.string,
  style: PropTypes.object,
}

export default ImageWithCaption