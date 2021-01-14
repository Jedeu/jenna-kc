import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWithCaption from '../../components/ImageWithCaption'

const StyledImagesContainer = styled.div`
  display: flex;
  margin-bottom: 2.5em;
  flex-wrap: wrap;

  & > div:nth-child(2) {
    margin-left: 2.5em;
  }

  & > div:nth-child(5) {
    margin-left: 2.5em;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2.5em;
`;

const StyledContentContainer = styled.div`
  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    font-size: 1.125em;
  }

  padding-bottom: 2.5em;
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
      aboutToPresent: file(relativePath: { eq: "mediavalet-present.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      shareAssets: file(relativePath: { eq: "mediavalet-share-assets.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gallery: file(relativePath: { eq: "mediavalet-gallery.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lofi: file(relativePath: { eq: "mediavalet-lo-fi.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      emptyPortal: file(relativePath: { eq: "mediavalet-empty-portal.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      portalSettings: file(relativePath: { eq: "mediavalet-portal-settings.png" }) {
        childImageSharp {
          fixed(width: 480, height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      noAssets: file(relativePath: { eq: "mediavalet-no-assets.png" }) {
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
      <SEO title="MediaValet" />
      <div style={{ marginLeft: '110px', marginRight: '110px' }}>
        <Link to='/work'>
          <Img fixed={imgQuery.chevron.childImageSharp.fixed} style={{ marginRight: '72px' }} />
        </Link>
        <span style={{ fontSize: '1.5em' }}>MediaValet</span>
        <span style={{ fontSize: '1.125em', marginLeft: '16px' }}>Product Designer</span>
        <StyledImagesContainer style={{ marginTop: '2.5em'}}>
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.aboutToPresent.childImageSharp.fixed}
            content='We were about to present'
          />
        </StyledImagesContainer>
        <StyledContentContainer>
          <StyledParagraph>
            As a product designer at MediaValet, I work with various teams like product, marketing and development to get alignment
            and to make sure the product comes to life in the way that it was envisioned. I may be brainstorming and whiteboarding
            an upcoming feature with product owners, demoing the newest prototype to stakeholders or reviewing UI with developers.
          </StyledParagraph>

          <div style={{ fontWeight: 'bold', marginTop: '40px' }}>Highlights at MediaValet</div>
          <div>- Learning to work with stakeholders</div>
          <div>- Building out a design system (In progress)</div>

          <StyledParagraph>
            I've worked on a lot of features, some that are new and some that were improvements, in my 4-ish years at MediaValet.
            The process that it takes to design these features are similar so I will go over the design process using a feature
            called Branded Portals as an example. Branded portals allows MediaValet users to curate and customize a collection of
            assets in MediaValet for external users that do not have access to these assets.

            The first step of the design process at MediaValet is to gather data to figure out what the problem is. We conduct
            competitive analyses and talk to the sales, customer success, and support teams for any relevant feedback from current
            or prospective clients. If this is an improvement on an existing feature, we look at product data usage to identify
            current user flows and identify any drop off points. Branded Portals came about because users were unhappy with the ways
            that assets are currently shared via a feature called Web Galleries. Some issues with the current solution included not being
            able to customize the settings (e.g. no ability to set the expiry date) and not being able to update assets if there were new
            versions available or if the asset was deleted.
          </StyledParagraph>

          <div>Some of the goals of Branded Portals were:</div>
          <div>- Have an intuitive and easy set up process</div>
          <div>- Be able to customize settings like setting an expiry date and configuring download settings</div>
          <div>- Be able to customize the assets by creating sections, having section header and description text fields</div>
          <div>- Changing the design so that assets would be displayed more visually (this will become more clear later in the screenshots)</div>
          <div>- Be responsive so external users can view it on different devices</div>
        </StyledContentContainer>
        <StyledImagesContainer>
          <ImageWithCaption
            source={imgQuery.shareAssets.childImageSharp.fixed}
            content='What the set up for Web Galleries looked like'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.gallery.childImageSharp.fixed}
            content='What users would see once the Web Gallery was shared'
            screenshot
          />
        </StyledImagesContainer>
        <StyledContentContainer>
          <StyledParagraph>
            Once the problem is defined and feature requirements are more clear, I begin low fidelity prototyping.
            Using a pen and paper, I take time to wireframe possible solutions. Since the office has switched to remote work,
            we have digitalized this process and use InVision Freehand.
          </StyledParagraph>
          <StyledParagraph>
            These initial options are discussed and iterated on within the product team first and eventually presented to
            different stakeholders. This might be members of other teams or clients. I like to do this on a whiteboard and have
            sticky notes so that people can write or draw their feedback. I've found people are more open to giving feedback
            at this stage since everything actually looks like a working progress.
          </StyledParagraph>
          <StyledParagraph>
            This is where I spend most of my time in the design process. By trying to iron out the user flow and general layout for
            the feature, a lot more questions come up that can change what the solution looks like. This means there are a lot of iterations
            at this stage and low fidelity is the best time to do that since it's relatively cheap to make those changes compared to later in
            the design process.
          </StyledParagraph>
          <StyledParagraph>
            Branded Portals was a big feature and I found myself getting overwhelmed a lot by how much there was to do. So I broke down
            the feature into 4 steps: Create, Add, Customize and View. This helped organize my thoughts since each step had a distinct goal.
            For example, at the 'Add' step, the user wants to find and add assets. At the 'Customize' step, the user may want to apply their
            branding or add descriptions for assets that they're adding. These steps also helped when presenting the solution. Within the product
            team, it narrowed down which part of the user flow needed more research. With other stakeholders, it helped facilitate....
          </StyledParagraph>
        </StyledContentContainer>
        <StyledImagesContainer>
          <ImageWithCaption
            source={imgQuery.lofi.childImageSharp.fixed}
            content='An example of a low fidelity prototype. It’s a messy process at the beginning.'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='An example of low fidelity prototype. The cutouts were used to show hover states.'
            screenshot
          />
          <div style={{ flexBasis: '100%', height: '25px' }}></div>
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='How Branded Portal was presented in design reviews'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.placeholder.childImageSharp.fixed}
            content='Description of what this photo is'
            screenshot
          />
        </StyledImagesContainer>
        <StyledContentContainer>
          <StyledParagraph>
            Once there is aligned on one or two solutions, I'll move onto high fidelity prototyping. MediaValet uses Sketch for wireframing
            and InVision for prototyping. At this stage, it's all in the details and I try to be as pixel-perfect as possible. The interactive
            prototypes at this stage are used by various teams to demo to current and potential clients and the final prototype is used in the
            developer hand off process.
          </StyledParagraph>
        </StyledContentContainer>
        <StyledImagesContainer>
          <ImageWithCaption
            source={imgQuery.emptyPortal.childImageSharp.fixed}
            content='Description of what this photo is'
            screenshot
          />
          <ImageWithCaption
            source={imgQuery.portalSettings.childImageSharp.fixed}
            content='We were about to present'
            screenshot
          />
          <div style={{ flexBasis: '100%', height: '25px' }}></div>
          <ImageWithCaption
            source={imgQuery.noAssets.childImageSharp.fixed}
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
            During development, the high fidelity wireframes are linked to tickets and used for reference in development. As the developers
            work on the feature, they may have quetsions that the product team didn't consider and small changes may have to be made.
            I'm also working with developers closely at this stage to make sure the design is being translated properly to development. During
            the development stage, the product team will also work with the marketing and customer success teams to discuss how the feature will
            be onboarded and marketed.
          </StyledParagraph>
        </StyledContentContainer>
      </div>
    </Layout>
  )
}

export default MediaValet
