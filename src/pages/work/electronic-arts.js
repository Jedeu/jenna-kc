import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWithCaption from '../../components/ImageWithCaption'

const StyledImagesContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-wrap: wrap;

  & > div:nth-child(2) {
    margin-left: 2.5em;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2.5em;
`;

const StyledContentContainer = styled.div`
  > * {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    font-size: 1.125em;
  }
`

const MediaValet = () => {
  const imgQuery = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      chevron: file(relativePath: { eq: "vector.png" }) {
          childImageSharp {
              fixed(width: 8, height: 20) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Electronic Arts" />
      <div style={{ marginLeft: '110px', marginRight: '110px' }}>
        <Link to='/work'>
          <Img fixed={imgQuery.chevron.childImageSharp.fixed} style={{ marginRight: '72px' }} />
        </Link>
        <span style={{ fontSize: '1.5em' }}>Electronic Arts</span>
        <span style={{ fontSize: '1.125em', marginLeft: '16px' }}>Junior Web Designer</span>
        <StyledImagesContainer style={{ marginTop: '2.5em' }}>
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='We were about to present'
            screenshot
          />
        </StyledImagesContainer>
        <StyledContentContainer>
          <StyledParagraph>
            This was my first semi-permanent job after freelancing. Even though this was a short contract, it's an important
            one to my design career because it's where I got to apply what I had only learned in theory and see it in practice.
            In the 3 months, I learned to be sufficient at Photoshop and Illustrator and honed my eye for detail.
          </StyledParagraph>

          <div style={{ fontWeight: 'bold', marginTop: '40px' }}>Highlights at EA</div>
          <div>- Diving into using Photoshop and Illustrator</div>
          <div>- Seeing my work on the official EA website (Sims, Unravel, Bejewelled)</div>
          <div>- Being a tthe EA campus in Burnaby</div>

          <StyledParagraph>
            At the time, EA was redesigning the official website and they needed to find assets like logos and hero
            images that would be on the website for all EA games. This involved going through a large list of games,
            digging through EA's asset bank looking for assets for those games and retouching or creating new ones.
            Depending on the game and what was needed for the game page, this might be cropping the hero image fit
            the style guide and ensuring that it will look good in different breakpoints or creating new icons and
            backgrounds for the game.
          </StyledParagraph>

          <div style={{ fontWeight: 'bold', marginTop: '40px' }}>Photoshop and Illustrator</div>
          <StyledParagraph>
            Often, some of the assets for the games were missing or did not look the way they should for how it will be
            used in the website. In these cases, I retouched or recreated these assets using Photoshop and Illustrator. I had
            mainly used Sketch up to this point and was very unfamiliar with the Adobe apps. I had to learn and learn quickly.
            Having to use these apps 8 hours a day reduced the learning curve a lot. On top of that, on my 45 minute commutes, I
            would watch video tutorials and look at keyboard shortcuts so I could become more efficient.
          </StyledParagraph>

          <StyledParagraph>
            Becoming a great graphic designer takes many hours of practice and I would not say my experience here made me an
            expert or that Photoshop and Illustrator are my tools of choice. But I definitely got over the intimidation that I
            felt as a junior in using them and gave me the confidence later to try new design software.
          </StyledParagraph>
        </StyledContentContainer>
        <StyledImagesContainer>
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='We were about to present'
            screenshot
          />
        </StyledImagesContainer>
        <StyledContentContainer>
          <div style={{ fontWeight: 'bold', marginTop: '40px' }}>Eye for Detail</div>
          <StyledParagraph>
            When I first started, I frequently had to redo my work because I would misplace an image on the artboard by a pixel or
            two. Eye for detail and being pixel perfect was something I knew was important as a designer but this was my first time
            seeing it in practice.
          </StyledParagraph>
          <StyledParagraph>
            Now I know that this is something that develops with time and experience. I also know that when you're responsible for
            something that goes out to users, you need to be meticulous, down to the pixel. But at the time as a junior, I remember
            being very surprised at the time that someone can see at a glance that an image that's over 600 pixels wide is off by a
            pixel.
          </StyledParagraph>
          <StyledParagraph>
            This was a necessary, albeit a rather boring process but I learned to be pixel perfect and it was my first experience seeing
            something I designed on a real production website. Some of my work can still be seen on the official EA pages for games like Sims
            Freeplay and Need for Speed.
          </StyledParagraph>
        </StyledContentContainer>
      </div>
    </Layout>
  )
}

export default MediaValet
