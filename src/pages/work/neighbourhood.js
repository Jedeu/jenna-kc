import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

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

const Neighbourhood = ({ location }) => {
  const imgQuery = useStaticQuery(graphql`
    query {
      landing: file(relativePath: { eq: "neighbourhood-landing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      howItWorks: file(relativePath: { eq: "neighbourhood-how-it-works.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pods: file(relativePath: { eq: "neighbourhood-pods.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selectedPod: file(relativePath: { eq: "neighbourhood-selected-pod.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080 quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chevron: file(relativePath: { eq: "back.png" }) {
        childImageSharp {
            fixed(width: 6, height: 20) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Neighbourhood"
        pathname={location.pathname}
      />
      <CaseStudyContainer>
        <WorkPageHeader
          chevronFixed={imgQuery.chevron.childImageSharp.fixed}
          company="Neighbourhood"
          title="UX/UI Designer"
        />
        <ImagesFlexContainer style={{ marginTop: '2.5em' }}>
          <ImageWithCaption
            source={imgQuery.landing.childImageSharp.fluid}
            content='Homepage'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.howItWorks.childImageSharp.fluid}
            content='How It Works page'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            Neighbourhood aimed to combat senior loneliness by providing a social platform where seniors would participate in an activity
            group for a period of time. During that time, users are encouraged to communicate and share their progress with other users
            and create a community within Neighbourhood.
          </StyledParagraph>

          <StyledParagraph>
            As a freelance UX/UI designer, I worked closely with the client to come up with a solution that would cater to the specific age group.
            Due to declining vision or mobility, seniors face different challenges when using technology than the rest of the population. As we age,
            we aren’t able to see smaller text and may not have the dexterity to perform certain gestures. Here are some design guidelines that were used
            in Neighbourhood with accessibility in mind.
          </StyledParagraph>

          <div style={{ fontWeight: 'normal' }}>Screen size</div>
          <StyledParagraph>
            Seniors prefer to use a tablet or desktop because of the bigger screen size. So Neighbourhood was optimized for screen sizes 768px and above.
          </StyledParagraph>

          <div style={{ fontWeight: 'normal' }}>Font</div>
          <StyledParagraph>
            Smaller fonts tend to be harder to read and for best readability, the font should be bigger than 12px and be a Sans Serif font.
            Neighbourhood used Raleway and 16px was the smallest font size used. Users could also pick the font size between 3 options.
          </StyledParagraph>

          <div style={{ fontWeight: 'normal' }}>Gestures & Target Areas</div>
          <StyledParagraph>
            Some gestures like swipes may be unfamiliar or seniors may not be able to perform these gestures. Neighborhood kept all gestures
            to taps and clicks. For similar reasons, all target areas were designed to be at least 44 x 44 pixels.
          </StyledParagraph>

          <div style={{ fontWeight: 'normal' }}>Color</div>
          <StyledParagraph>
            The primary color was chosen to provide a high contrast so CTAs and clickable elements would stand out. Ideally the color contrast ratio
            should be at least 3:1. The color contrast ratio for the primary color in Neighbourhood was 6.8:1.
          </StyledParagraph>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgQuery.pods.childImageSharp.fluid}
            content='Original PODS page design'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.selectedPod.childImageSharp.fluid}
            content='PODS pages design after user testing'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            Once the first iteration of high fidelity wireframes were finished, the client conducted user testing at senior centers.
            Due to scheduling conflicts, I was not able to attend in person but I had access to recordings of these sessions.
          </StyledParagraph>
          <StyledParagraph>
            User testing revealed some major flaws. In terms of accessibility, most users said that the font was too small and the
            primary color was hard to see. Based on this feedback, the minimum font size was increased from 14px to 16px and
            another primary color was chosen so the color contrast ratio went from 3:1 to 6.8:1.
          </StyledParagraph>
          <StyledParagraph>
            The other issue was the PODS page. The purpose of this page is for users to easily go back to their current pod and to see some info about previous and next pods.
            There were a lot of elements fighting for attention so some users were getting lost. There were a couple changes made to address this. First, I took out some information
            on the previous and next pod panels to declutter the page. Second, I reduced the icons in the previous and next pods as well so the CTA on the current pod panel would stand out.
            Lastly, I applied the highlight color only to the current pod panel and reduced the height of the other panels so the current pod panel would be what the users eyes are drawn to.
          </StyledParagraph>
          <StyledParagraph>
            Unfortunately this project was discontinued at the development stage, but I learned a lot about best practices around accessibility and I was reminded of the importance
            of user testing.
          </StyledParagraph>
        </ContentContainer>
      </CaseStudyContainer>
    </Layout>
  )
}

export default Neighbourhood
