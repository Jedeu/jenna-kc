import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"


import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PicParagraphContainer from '../../components/PicParagraphContainer'

const StyledParagraph = styled.p`
  margin-bottom: 1.5em;
`;

const StyledDescription = styled.div`
  max-width: 629px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media(max-width: 1024px) {
    width: 24px 40px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4C4C4C;
  display: inline-block;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 70%;
    height: 1px;
    bottom: 0;
    border-bottom: 2px solid #F5B4A2;
  }

  &:hover:before {
    width: 100%;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
`;

const Work = () => {
  const coverImgs = useStaticQuery(graphql`
    query {
      mediaValet: file(relativePath: { eq: "mediavalet.png" }) {
        childImageSharp {
          fixed(width: 560, height: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      neighbourhood: file(relativePath: { eq: "neighbourhood.png" }) {
        childImageSharp {
          fixed(width: 560, height: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      electronicArts: file(relativePath: { eq: "ea.png" }) {
        childImageSharp {
          fixed(width: 560, height: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ padding: '0 80px'}}>
        <p style={{ fontSize: '1.5em' }}>Hi! My name is Jenna Kuck-Chang and I'm a product designer</p>
        <PicParagraphContainer>
          <Img fixed={coverImgs.mediaValet.childImageSharp.fixed}/>
          <StyledDescription>
            <StyledParagraph>
              Starting from the pen and paper all the way to release, I work with various teams like
              product, marketing and development to get alignment and to make sure the product comes to life in the way that it was envisioned
            </StyledParagraph>
            <StyledParagraph>
              Being a part of a growing product team has been a very interesting learning experience. I've learned a lot about product management
              as well as challenges in setting up processes that can scale
            </StyledParagraph>
            <StyledLink to='/work/mediavalet'>Read more about MediaValet</StyledLink>
          </StyledDescription>
        </PicParagraphContainer>
        <PicParagraphContainer>
          <StyledDescription>
            <StyledParagraph>
              Neighbourhood was a project aimed to combat senior loneliness by providing a social platform where seniors could group for activities
              for a period of time. During that period, the community that was doing the same activity could communicate and share their progress,
              thus creating a community within Neighbourhood.
            </StyledParagraph>
            <StyledParagraph>
              This project was designed for a specific user group that had specific user needs. Since this isn’t a user group I’m familiar with, learning about accessibility and user testing were a huge part of this project.
            </StyledParagraph>
            <StyledLink to='/work/neighbourhood'>Read more about Neighbourhood</StyledLink>
          </StyledDescription>
          <Img fixed={coverImgs.neighbourhood.childImageSharp.fixed}/>
        </PicParagraphContainer>
        <PicParagraphContainer>
          <Img fixed={coverImgs.electronicArts.childImageSharp.fixed}/>
          <StyledDescription>
            <p>
              For EA's redesign of the website, they needed to find assets like logos and hero images for all EA games
            </p>
            <p>
              My role entailed going through a large list of these games to find the assets. They often needed to be
              be recreated or retouched through Photoshop and Illustrator and having very little experience with these
              programs, it was an interesting experience to say the least
            </p>
            <StyledLink to='/work/electronic-arts'>Read more about EA</StyledLink>
          </StyledDescription>
        </PicParagraphContainer>
      </div>
    </Layout>
  )
}

export default Work
