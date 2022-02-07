import React from "react"
import styled from 'styled-components'

import { useImages } from "../../hooks/use-images"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWithCaption from '../../components/ImageWithCaption'
import ImagesFlexContainer from '../../components/ImagesFlexContainer'
import ImagesGridContainer from '../../components/ImagesGridContainer'
import ContentContainer from '../../components/ContentContainer'
import WorkPageHeader from "../../components/WorkPageHeader"
import CaseStudyContainer from '../../components/CaseStudyContainer'
import addSectionGif from '../../images/mediavalet-add-section.gif'
import deleteSectionGif from '../../images/mediavalet-delete-section.gif'

const StyledParagraph = styled.p`
  margin-bottom: 1.5em;
`;

const MediaValet = ({ location }) => {
  const imgs = useImages();

  return (
    <Layout location={location}>
      <SEO
        title="MediaValet"
        pathname={location.pathname}
      />
      <CaseStudyContainer>
        <WorkPageHeader
          chevronFixed={imgs.chevron.childImageSharp.fixed}
          company="MediaValet"
          title="Product Designer"
        />
        <ImagesFlexContainer style={{ marginTop: '2.5em'}}>
          <ImageWithCaption
            source={imgs.iaReview.childImageSharp.fluid}
            content='An example of a design review'
          />
          <ImageWithCaption
            source={imgs.aboutToPresent.childImageSharp.fluid}
            content='We were about to present a low fidelity wireframe'
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            As a product designer at MediaValet, I work with various teams like product, marketing and development to get alignment
            and to make sure the product comes to life in the way that it was envisioned. On a given day, I may be brainstorming
            and whiteboarding an upcoming feature with product owners, demoing the newest prototype to stakeholders or reviewing UI
            with developers.
          </StyledParagraph>
          <StyledParagraph>
            I've worked on a lot of features in my 4-ish years at MediaValet. The design process for features are similar so I will go over
            it using a feature called Branded Portals as an example. Branded portals allows MediaValet users to curate and customize
            a collection of assets for external users that do not have access to these assets.
        </StyledParagraph>

        <div style={{ fontWeight: 'normal' }}>Research & Defining the Goal</div>
        <StyledParagraph>
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

          <div>Some of KPIs tracked were:</div>
          <div>- Monthly number of Branded Portals created, especially compared the number of web galleries created</div>
          <div style={{ marginBottom: '40px' }}>- Half of client base to have Branded Portals activated</div>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgs.shareAssets.childImageSharp.fluid}
            content='What the set up for Web Galleries looked like'
            screenshot
          />
          <ImageWithCaption
            source={imgs.gallery.childImageSharp.fluid}
            content='What users would see once the Web Gallery was shared'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>

        <div style={{ fontWeight: 'normal' }}>Low Fidelity Prototyping</div>
          <StyledParagraph>
            When the goals are defined and feature requirements are more clear, I begin low fidelity prototyping.
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
            branding or add descriptions for assets that they're adding. These steps also helped when presenting the solution since it narrowed
            down which part of the user flow needed more work. Branded Portals was supposed to be as self-serving as possible so the ‘Add’ and
            ‘Customize’ steps were tested and iterated on the most.
          </StyledParagraph>
        </ContentContainer>
        <ImagesGridContainer>
          <ImageWithCaption
            source={imgs.lofi.childImageSharp.fluid}
            content='An example of a low fidelity prototype. It’s a messy process at the beginning.'
          />
          <ImageWithCaption
            source={imgs.penPaper.childImageSharp.fluid}
            content='An example of low fidelity prototype. The cutouts were used to show hover states.'
          />
          <ImageWithCaption
            source={imgs.whiteboard.childImageSharp.fluid}
            content='Example of a whiteboarding session'
          />
          <ImageWithCaption
            source={imgs.iaWhiteboard.childImageSharp.fluid}
            content='Another example of a whiteboarding session'
          />
        </ImagesGridContainer>
        <ContentContainer>
          <div style={{ paddingTop: '40px', fontWeight: 'normal' }}>High Fidelity Prototyping</div>
          <StyledParagraph>
            Once there is aligned on one or two solutions, I'll move onto high fidelity prototyping. MediaValet uses Sketch for wireframing
            and InVision for prototyping. At this stage, it's all in the details. The interactive prototypes at this stage are used by various
            teams to demo to current and potential clients and the final prototype is used in the developer hand off process.
          </StyledParagraph>
          <StyledParagraph>
            One of the goals for Branded Portals was to be a more visual way of sharing assets. To accomplish this, a mini design system was
            developed using InVision’s Design System Manager. Before going into development, components were created using an 8-point grid system
            and used throughtout Branded Portals.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ paddingTop: '13px', fontWeight: 'normal' }}>Findings from User Testing</div>
          <StyledParagraph>
            High fidelity prototypes were used in user testing as well.
            We were able to talk to about 5 customers and there were 2 areas of common feedback
          </StyledParagraph>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgs.untitledSection.childImageSharp.fluid}
            content='Previous empty state. Action bar is on top of the empty section'
          />
          <ImageWithCaption
            source={imgs.sideMenu.childImageSharp.fluid}
            content='Updated empty state. Action bar is to the left of the empty section'
          />
        </ImagesFlexContainer>
        <ContentContainer style={{ paddingTop: '13px'}}>
          <StyledParagraph>
            First was improvements to the empty state. Some notes here the dotted line are items that come up on hover but
            I’ve put them all in one screen for convenience.
          </StyledParagraph>
          <StyledParagraph>
            With the first iteration seen in the first image above, most users we interviewed had issues seeing the action bar
            highlighted in blue. This was especially hard to discover for the top section because it overlapped with where the
            hero image would be. So we moved it to the left where we knew there was always white space.
          </StyledParagraph>
          <StyledParagraph>
            The other aspect users had issues with was the ‘Add assets to your Section’ text. Even with the big +, most users didn’t know
            what was required to add assets. So we changed the text to include ‘Click here’ and updated the icon to better reflect this action.
          </StyledParagraph>
        </ContentContainer>
        <ImagesFlexContainer style={{ marginTop: '2.5em'}}>
          <ImageWithCaption
            source={addSectionGif}
            content='Previously there was no motion when a new section is added'
            alt="adding new section"
            isGif
          />
          <ImageWithCaption
            source={deleteSectionGif}
            content="Motion added to show the newly created section in the user's view"
            alt="deleting new section"
            isGif
            style={{ minHeight: '90%' }}
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            Second improvement was to add motion when a new section is added. As you can see in the left gif, if users didn’t have the browser
            set to a high enough height, users were not able to see that a new section has been added. In some cases, this resultedin rage clicking.
            To resolve this, motion was introduced where the page scrolls up to show the new section in the user’s view point.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ paddingTop: '13px', fontWeight: 'normal' }}>During Development</div>
          <StyledParagraph>
            During development, the high fidelity wireframes are linked to tickets and used for reference in development. As the developers
            work on the feature, they may have quetsions and small changes may have to be made. I work with developers closely at this stage
            to make sure the design is being translated properly to development. During the development stage, the product team will also work
            with the marketing and customer success teams to discuss how the feature will be onboarded and marketed.
          </StyledParagraph>
          <StyledParagraph>
            Branded Portals is currently in in beta and still being actively worked on by the product team and the dev team. Some items on the
            roadmap include improving the mobile view and providing more tracking.
          </StyledParagraph>
        </ContentContainer>
        <ImagesGridContainer>
          <ImageWithCaption
            source={imgs.emptyPortal.childImageSharp.fluid}
            content='Start of the set up flow for Branded Portals'
            screenshot
          />
          <ImageWithCaption
            source={imgs.portalSettings.childImageSharp.fluid}
            content='Settings page for Branded Portals'
            screenshot
          />
          <ImageWithCaption
            source={imgs.noAssets.childImageSharp.fluid}
            content='404 page for Branded Portals'
            screenshot
          />
          <ImageWithCaption
            source={imgs.brandedPortal.childImageSharp.fluid}
            content='What Branded Portals looks like to external users'
            screenshot
          />
        </ImagesGridContainer>
        <ContentContainer>
          <div style={{ paddingTop: '40px', fontWeight: 'normal' }}>Where is branded portals now?</div>
          <StyledParagraph>
            At the time, branded portals was in beta and was being actively worked on. So I was not able to see if the KPI of targeting half of MediaValet clients
            use Branded Portals was realized. However, in terms of usage, 90% of clients in beta created 1 branded portal within the first week of release
            and in the first 3 months of the beta release, users created 10 times as many branded portals as they did web galleries on average.
          </StyledParagraph>
          <StyledParagraph>
            There was very positive qualitative feedback as well and we heard customers give feedback such as
            “We’ve heard numerous positive things … about how user friendly the interface is” and “Another home run with branded portals…
            this is the missing piece of the puzzle”.
          </StyledParagraph>
        </ContentContainer>
      </CaseStudyContainer>
    </Layout>
  )
}

export default MediaValet
