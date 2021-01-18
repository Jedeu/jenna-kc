import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PicParagraphContainer from '../components/PicParagraphContainer'

const StyledDescription = styled.div`
  max-width: 680px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width:1023px) {
    width: 560px;
    padding: 0 40px;
  }
`;

const StyledContainer = styled.div`
  padding: 0 80px;

  @media(max-width: 1024px) {
    padding: 0 40px;
  }

  @media(max-width: 1023px) {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImage = styled(Img)`
  flex-shrink: 0;
`;

const About = () => {
  const imgQuery = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 500, height: 375) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About me" />
      <StyledContainer style={{ padding: '0 80px' }}>
        <p style={{ fontSize: '1.5em' }}>A little bit about me</p>
        <PicParagraphContainer>
          <StyledImage fixed={imgQuery.profileImg.childImageSharp.fixed} />
          <StyledDescription>
            <p>Hi, I'm a product designer currently based in Vancouver, BC.</p>
            <p>
              What I love about product design is that I get to use both my creative and logical side. In the earlier
              stages of the design process, I get to use my more scientific side while doing research and gathering data
              and later in the process, I get to use my more creative side in wireframing and prototyping.
            </p>
            <p>
              My aim as a designer is to create a truly collaborative process where anyone, designer or not,
              feels encouraged to share feedback.
            </p>
            <p>
              In my free time, I like to read, look at photos of dogs on Instagram and go for walks or run outside.
            </p>
          </StyledDescription>
        </PicParagraphContainer>
      </StyledContainer>
    </Layout>
  )
}

export default About
