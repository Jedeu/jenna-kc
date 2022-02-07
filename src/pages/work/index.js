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

const StyledContainer = styled.div`
  padding: 0 80px;

  @media(max-width: 1024px) {
    padding: 0 40px;
  }

  @media(max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 495px) {
    padding: 0 24px;
  }
`;

const StyledGreeting = styled.p`
  font-size: 1.5em;

  @media(max-width:1023px) {
    width: 560px;
  }

  @media(max-width:590px) {
    padding: 0 40px;
  }

  @media(max-width:520px) {
    width: 100vw;
  }

  @media(max-width:389px) {
    line-height: 1.875rem;
  }
`;

const StyledImgContainer = styled.div`
  flex-shrink: 0;
  width: 560px;

  @media(max-width:580px) {
    width: 100vw;
  }
`;
const StyledDescription = styled.div`
  max-width: 680px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media(max-width:1023px) {
    width: 560px;
    padding: 0 40px;
  }

  @media(max-width: 495px) {
    width: 100vw;
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

const Work = ({ location }) => {
  const coverImgs = useStaticQuery(graphql`
    query {
      mediaValet: file(relativePath: { eq: "mediavalet.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      neighbourhood: file(relativePath: { eq: "neighbourhood.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      electronicArts: file(relativePath: { eq: "ea.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO
        title="Home"
        pathname={location.pathname}
      />
      <StyledContainer>
        <StyledGreeting>Hi! My name is Jenna Kuck-Chang I'm a product designer</StyledGreeting>
        <PicParagraphContainer>
          <StyledImgContainer>
            <Img fluid={coverImgs.mediaValet.childImageSharp.fluid} />
          </StyledImgContainer>
          <StyledDescription>
            <StyledParagraph>
              As a senior product designer at Procurify, I work closely with product managers and engineering so that users
              can easily create, track and report on requisitions, purchase orders and expenses.
            </StyledParagraph>
            <StyledLink to='/work/procurify'>Read more about Procurify</StyledLink>
          </StyledDescription>
        </PicParagraphContainer>
        <PicParagraphContainer shouldReverse>
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
          <StyledImgContainer>
            <Img fluid={coverImgs.mediaValet.childImageSharp.fluid} />
          </StyledImgContainer>
        </PicParagraphContainer>
        <PicParagraphContainer>
          <StyledImgContainer>
            <Img fluid={coverImgs.neighbourhood.childImageSharp.fluid}/>
          </StyledImgContainer>
          <StyledDescription>
            <StyledParagraph>
              Neighbourhood was a project aimed to combat senior loneliness by providing a social platform where seniors would participate in an activity group for a period of time.
            </StyledParagraph>
            <StyledParagraph>
              This project was designed for a specific user group that had specific user needs. Since this isn’t a user group I’m familiar with, learning about accessibility and user testing were a huge part of this project.
            </StyledParagraph>
            <StyledLink to='/work/neighbourhood'>Read more about Neighbourhood</StyledLink>
          </StyledDescription>
        </PicParagraphContainer>
        <PicParagraphContainer shouldReverse>
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
          <StyledImgContainer>
            <Img fluid={coverImgs.electronicArts.childImageSharp.fluid}/>
          </StyledImgContainer>
        </PicParagraphContainer>
      </StyledContainer>
    </Layout>
  )
}

export default Work
