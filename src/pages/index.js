import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledExperienceRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const StyledDescription = styled.div`
  max-width: 629px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage = () => {
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
      <p>Hi! My name is Jenna Kuck-Chang and I'm a product designer</p>
      <StyledExperienceRow>
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
          <p>Read more about MediaValet</p>
        </StyledDescription>
      </StyledExperienceRow>
      <StyledExperienceRow>
        <StyledDescription>
          <p>
            Eating4Me was a project aimed to provide access to food and nutrition specialists through a directory website
            that made it easy for users to find what they needed based on their dietary needs
          </p>
          <p>
            This was a personal project that... (WRITE-UP NOT FINISHED)
          </p>
          <p>Read more about Eating4Me</p>
        </StyledDescription>
        <Img fixed={coverImgs.eatingForMe.childImageSharp.fixed}/>
      </StyledExperienceRow>
      <StyledExperienceRow>
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
          <p>Read more about EA</p>
        </StyledDescription>
      </StyledExperienceRow>
    </Layout>
  )
}

export default IndexPage
