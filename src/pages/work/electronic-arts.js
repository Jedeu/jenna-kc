import React from "react"
import styled from 'styled-components'

import { useImages } from "../../hooks/use-images"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWithCaption from '../../components/ImageWithCaption'
import ImagesFlexContainer from '../../components/ImagesFlexContainer'
import ContentContainer from '../../components/ContentContainer'
import WorkPageHeader from "../../components/WorkPageHeader"
import CaseStudyContainer from '../../components/CaseStudyContainer'

const StyledParagraph = styled.p`
  margin-bottom: 1.5em;
`;

const ElectronicArts = ({ location }) => {
  const imgs = useImages();

  return (
    <Layout>
      <SEO
        title="Electronic Arts"
        pathname={location.pathname}
      />
        <CaseStudyContainer>
          <WorkPageHeader
            chevronFixed={imgs.chevron.childImageSharp.fixed}
            company="Electronic Arts"
            title="Junior Web Designer"
          />
          <ImagesFlexContainer style={{ marginTop: '2.5em' }}>
            <ImageWithCaption
              source={imgs.needForSpeed.childImageSharp.fluid}
              content='I retouched the logos shown above'
              screenshot
            />
            <ImageWithCaption
              source={imgs.peggleBlast.childImageSharp.fluid}
              content='Example of a hero image I worked on'
              screenshot
            />
          </ImagesFlexContainer>
          <ContentContainer>
            <StyledParagraph>
              At the time, EA was redesigning the official website and they needed to find assets like logos and hero
              images that would be on the website for all EA games. This involved going through a large list of games,
              digging through EA's asset bank looking for assets for those games and retouching or creating new ones.
              Depending on the game and what was needed for the game page, this might be cropping the hero image fit
              the style guide and ensuring that it will look good in different breakpoints or creating new icons and
              backgrounds for the game.
            </StyledParagraph>

            <StyledParagraph>
              I worked as a contract junior web designer at EA for 3 months. Even though this was a short contract, it's
              important in my career because it's where I got to apply what I learned only in theory.
              In the 3 months, I learned to be sufficient at Photoshop and Illustrator and honed my eye for detail.
            </StyledParagraph>

            <div style={{ fontWeight: 'normal' }}>Photoshop and Illustrator</div>
            <StyledParagraph>
              Some of the assets for the games were missing or didn't fit into how it will be used in the website. In these cases,
              I retouched or recreated them using Photoshop and Illustrator. I had mainly used Sketch up to this point and was very
              unfamiliar with the Adobe apps. I had to learn and learn quickly. Using Photoshop and Illustrator 8 hours a day reduced
              the learning curve a lot. On top of that, on my 45 minute commutes, I watched video tutorials and look at keyboard shortcuts.
            </StyledParagraph>

            <StyledParagraph>
              Becoming a great graphic designer takes hours of practice and I wouldn't say my experience here made me an
              expert. But I definitely got over the intimidation that I felt as a junior in using Photoshop and Illustrator
              and gave me the confidence to try new design software.
            </StyledParagraph>
          </ContentContainer>
          <ImagesFlexContainer>
            <ImageWithCaption
              source={imgs.sims.childImageSharp.fluid}
              content='Example of a background I worked on'
              screenshot
            />
            <ImageWithCaption
              source={imgs.bejeweled.childImageSharp.fluid}
              content='Another example of a hero image I worked on'
              screenshot
            />
          </ImagesFlexContainer>
          <ContentContainer>
            <div style={{ fontWeight: 'normal', marginTop: '40px' }}>Eye for Detail</div>
            <StyledParagraph>
              When I first started, I frequently had to redo my work because I would misplace an image on the artboard by a pixel or
              two. Eye for detail and being pixel perfect was something I knew was important as a designer but this was my first time
              seeing it in practice.
            </StyledParagraph>
            <StyledParagraph>
              Now I know that this is something that develops with time and experience. I also know that when you're responsible for
              something that goes out to users, you need to be meticulous, down to the pixel. But at the time as a junior, I remember
              being very surprised at the time that someone can see at a glance that an image that's over 6000 pixels wide is off by a
              pixel.
            </StyledParagraph>
            <StyledParagraph>
              This was a necessary, albeit a rather boring process but I learned to be pixel perfect and it was my first experience seeing
              something I designed on a real production website. Some of my work can still be seen on the official EA pages for games like Sims
              Freeplay and Need for Speed.
            </StyledParagraph>
          </ContentContainer>
        </CaseStudyContainer>
    </Layout>
  )
}

export default ElectronicArts
