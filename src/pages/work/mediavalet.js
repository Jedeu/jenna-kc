import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWithCaption from '../../components/ImageWithCaption'
import ImagesFlexContainer from '../../components/ImagesFlexContainer'
import ImagesGridContainer from '../../components/ImagesGridContainer'
import ContentContainer from '../../components/ContentContainer';

const StyledParagraph = styled.p`
  margin-bottom: 1.5em;
`;

const MediaValet = () => {
  const imgQuery = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutToPresent: file(relativePath: { eq: "mediavalet-present.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shareAssets: file(relativePath: { eq: "mediavalet-share-assets.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery: file(relativePath: { eq: "mediavalet-gallery.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lofi: file(relativePath: { eq: "mediavalet-lo-fi.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emptyPortal: file(relativePath: { eq: "mediavalet-empty-portal.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portalSettings: file(relativePath: { eq: "mediavalet-portal-settings.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noAssets: file(relativePath: { eq: "mediavalet-no-assets.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      review: file(relativePath: { eq: "mediavalet-review.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      penPaper: file(relativePath: { eq: "mediavalet-pen-paper.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteboard: file(relativePath: { eq: "mediavalet-whiteboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iaWhiteboard: file(relativePath: { eq: "mediavalet-ia-whiteboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brandedPortal: file(relativePath: { eq: "mediavalet-branded-portal.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
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
      <SEO title="MediaValet" />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px'  }}>
          <Link to='/work' style={{ marginRight: '30px', textDecoration: 'none', color: '#4C4C4C', fontSize: '1.125em', display: 'flex', alignItems: 'center' }}>
            <Img fixed={imgQuery.chevron.childImageSharp.fixed} />
            <span style={{ marginLeft: '6px' }}>Back</span>
          </Link>
          <span style={{ fontSize: '1.5em' }}>MediaValet</span>
          <span style={{ fontSize: '1.125em', marginLeft: '16px' }}>Product Designer</span>
        </div>
        <ImagesFlexContainer style={{ marginTop: '2.5em'}}>
          <ImageWithCaption
            source={imgQuery.review.childImageSharp.fluid}
            content='Description of what this photo is'
          />
          <ImageWithCaption
            source={imgQuery.aboutToPresent.childImageSharp.fluid}
            content='We were about to present'
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            As a product designer at MediaValet, test I work with various teams like product, marketing and development to get alignment
            and to make sure the product comes to life in the way that it was envisioned. On a given day, I may be brainstorming
            and whiteboarding an upcoming feature with product owners, demoing the newest prototype to stakeholders or reviewing UI
            with developers.
          </StyledParagraph>
          <StyledParagraph>
            I've worked on a lot of features in my 4-ish years at MediaValet. The design process for features are similar so I will go over
            it using a feature called Branded Portals as an example. Branded portals allows MediaValet users to curate and customize
            a collection of assets for external users that do not have access to these assets.

            The first step of the design process at MediaValet is to gather data to figure out what the problem is. We conduct
            competitive analyses and talk to the sales, customer success, and support teams. If this is an improvement on an existing feature,
            we look at product data usage to identify current user flows and any drop off points. Branded Portals came about because users were
            unhappy with the ways that assets are currently shared via a feature called Web Galleries. Some issues with the current solution included
            not being able to customize the settings (e.g. no ability to set the expiry date) and that assets were not being updated if there were
            new versions available or if the asset was deleted.
          </StyledParagraph>

          <div>Some of the goals of Branded Portals were:</div>
          <div>- Have an intuitive and easy set up process</div>
          <div>- Be able to customize settings like setting an expiry date and configuring download settings</div>
          <div>- Be able to customize by creating sections, having a section header and description text fields</div>
          <div>- Changing the design so that assets would be displayed more visually</div>
          <div style={{ marginBottom: '40px' }}>- Be responsive so external users can view it on different devices</div>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgQuery.shareAssets.childImageSharp.fluid}
            content='What the set up for Web Galleries looked like'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.gallery.childImageSharp.fluid}
            content='What users would see once the Web Gallery was shared'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            Once the problem is defined and feature requirements are more clear, I begin low fidelity prototyping.
            I wireframe possible solutions, usually on pen and paper. Since the office has switched to remote work,
            we have digitalized this process and use InVision Freehand.
          </StyledParagraph>
          <StyledParagraph>
            These initial options are discussed and iterated on within the product team first and are eventually presented to
            different stakeholders. This might be members of other teams or clients. I like to do this on a whiteboard and have
            sticky notes so that people can write or draw out their feedback. I have found that people are more open to giving
            feedback at this stage since everything actually looks like a work in progress.
          </StyledParagraph>
          <StyledParagraph>
            I try to iron out the user flow and general layout during low fidelity, so this is where I spend most of my time in the design
            process. There are a lot of ideas and questions at this stage so there are a lot of iterations. Low fidelity is the best time to
            do that since it's relatively cheap to make those changes compared to later in the design process.
          </StyledParagraph>
          <StyledParagraph>
            Branded Portals was a big feature and I found myself getting overwhelmed by how much there was to do. So I broke down
            the feature into 4 steps: Create, Add, Customize and View. This helped organize my thoughts since each step had a distinct goal.
            For example, at the 'Add' step, the user wants to find and add assets. At the 'Customize' step, the user may want to apply their
            branding or add descriptions for assets that they're adding. These steps also helped when presenting the solution.
            It narrowed down which part of the user flow needed more work.
          </StyledParagraph>
        </ContentContainer>
        <ImagesGridContainer>
          <ImageWithCaption
            source={imgQuery.lofi.childImageSharp.fluid}
            content='An example of a low fidelity prototype. It’s a messy process at the beginning.'
          />
          <ImageWithCaption
            source={imgQuery.penPaper.childImageSharp.fluid}
            content='An example of low fidelity prototype. The cutouts were used to show hover states.'
          />
          <ImageWithCaption
            source={imgQuery.whiteboard.childImageSharp.fluid}
            content='How Branded Portal was presented in design reviews'
          />
          <ImageWithCaption
            source={imgQuery.iaWhiteboard.childImageSharp.fluid}
            content='Description of what this photo is'
          />
        </ImagesGridContainer>
        <ContentContainer>
          <StyledParagraph style={{ paddingTop: '40px' }}>
            Once there is aligned on one or two solutions, I'll move onto high fidelity prototyping. MediaValet uses Sketch for wireframing
            and InVision for prototyping. At this stage, it's all in the details and I try to be as pixel-perfect as possible. The interactive
            prototypes at this stage are used by various teams to demo to current and potential clients and the final prototype is used in the
            developer hand off process.
          </StyledParagraph>
        </ContentContainer>
        <ImagesGridContainer>
          <ImageWithCaption
            source={imgQuery.emptyPortal.childImageSharp.fluid}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.portalSettings.childImageSharp.fluid}
            content='We were about to present'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.noAssets.childImageSharp.fluid}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.brandedPortal.childImageSharp.fluid}
            content='We were about to present'
            screenshot
          />
        </ImagesGridContainer>
        <ContentContainer>
          <StyledParagraph style={{ paddingTop: '40px' }}>
            During development, the high fidelity wireframes are linked to tickets and used for reference in development. As the developers
            work on the feature, they may have quetsions that the product team didn't consider and small changes may have to be made.
            I'm also working with developers closely at this stage to make sure the design is being translated properly to development. During
            the development stage, the product team will also work with the marketing and customer success teams to discuss how the feature will
            be onboarded and marketed.
          </StyledParagraph>
        </ContentContainer>
      </div>
    </Layout>
  )
}

export default MediaValet
