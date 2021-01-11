import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"


import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PicParagraphContainer from '../../components/PicParagraphContainer'

const StyledDescription = styled.div`
  max-width: 629px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
      eatingForMe: file(relativePath: { eq: "eating-4-me.png" }) {
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
      <p style={{ fontSize: '1.5em' }}>Hi! My name is Jenna Kuck-Chang and I'm a product designer</p>
      <PicParagraphContainer>
        <Img fixed={coverImgs.mediaValet.childImageSharp.fixed}/>
        <StyledDescription>
          <p>
            Starting from the pen and paper low fi stage all the way to release, I work with various teams like
            product, marketing and development to get alignment and to make sure the product comes to life in the way that it was envisioned
          </p>
          <p>
            Being a part of a growing product team has been a very interesting learning experience. I've learned a lot about product management
            itself as well as challenges in setting up processes that can scale
          </p>
          <StyledLink to='/work/mediavalet'>Read more about MediaValet</StyledLink>
        </StyledDescription>
      </PicParagraphContainer>
      <PicParagraphContainer>
        <StyledDescription>
          <p>
            Eating4Me was a project aimed to provide access to food and nutrition specialists through a directory website
            that made it easy for users to find what they needed based on their dietary needs
          </p>
          <p>
            This was a personal project that... (WRITE-UP NOT FINISHED)
          </p>
          <StyledLink to='/eating4me'>Read more about Eating4Me</StyledLink>
        </StyledDescription>
        <Img fixed={coverImgs.eatingForMe.childImageSharp.fixed}/>
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
          <StyledLink to='/ea'>Read more about EA</StyledLink>
        </StyledDescription>
      </PicParagraphContainer>
    </Layout>
  )
}

export default Work