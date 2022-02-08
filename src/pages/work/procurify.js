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

const Procurify = ({ location }) => {
  const imgs = useImages();

  return (
    <Layout location={location}>
      <SEO
        title="Procurify"
        pathname={location.pathname}
      />
      <CaseStudyContainer>
        <WorkPageHeader
          company="Procurify"
          title="Senior Product Designer"
        />
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgs.procurifyLofi1.childImageSharp.fluid}
            content='Example of low fidelity prototyping in Miro'
            screenshot
          />
          <ImageWithCaption
            source={imgs.procurifyLofi2.childImageSharp.fluid}
            content='Another example of low fidelity prototyping in Miro'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph>
            As a senior product designer at Procurify, I work closely with product managers and engineering
            so that users can easily create, track and report on requisitions, purchase orders and expenses.
          </StyledParagraph>
          <StyledParagraph>
            I’ll be using a project called Auto Purchase Orders (Auto PO) to showcase the design process at Procurify.
            Auto PO is a special project for me because it is the first project I worked on at Procurify.
            There was already a solution being worked on at the time but something wasn’t quite right that the team couldn’t figure out.
            I was brought on to provide a fresh perspective and to expedite the project.
        </StyledParagraph>
        <div style={{ fontWeight: 'normal' }}>What is a Purchase Order (PO)?</div>
        <StyledParagraph>
          Purchase orders are documents sent from a purchaser to a vendor to confirm the purchase of goods and services.
          They include information like price, quantity, and expected arrival date of the item. Vendors will often include
          the PO number when creating an invoice so that the purchaser’s finance team can ensure information on both the PO
          and invoice is the same, through a process called 2-way matching.
        </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
        <div style={{ fontWeight: 'normal' }}>What is the problem?</div>
          <StyledParagraph>
            Traditionally, spend management workflow is segmented and the person that requests a spending approval is not the same
            person making the purchase. A good example of this is a new employee who requests new equipment. They will send a request
            for the equipment through a request for order (RFO), which will be approved by their manager. Then, another person such
            will make the actual purchase when the request is approved. The finance team will use the documented approval to create a PO,
            validate invoices and create bills. This workflow is reflected in how Procurify is set up. There are different permissions
            assigned to users for Request, Approve, and Procure actions and these are separate pages in the navigation.
          </StyledParagraph>
          <StyledParagraph>
            These initial options are discussed and iterated on within the product team first and are eventually presented to
            different stakeholders. This might be members of other teams or clients. I like to do this on a whiteboard and have
            sticky notes so that people can write or draw out their feedback. I have found that people are more open to giving
            feedback at this stage since everything actually looks like a work in progress.
          </StyledParagraph>
          <StyledParagraph>
            Businesses are increasingly purchasing from e-commerce platforms like Amazon. This workflow starts off similarly in
            that a person sends a request for spending approval. However, the requester will use an e-commerce platform to make
            the purchase themselves. These businesses still need to create POs in Procurify to make sure their spending is reported
            in budgets. Creating a PO also allows an item to be marked as ‘Purchased’, which most customers use as
            the source of truth for department spend tracking.
          </StyledParagraph>
          <StyledParagraph>
            Reporting spend from a request to payment in Procurify requires a purchase order to be created, regardless of whether it
            is actually required by the vendor. This takes extra time and effort, especially for customers who may not have a finance
            department or procurement professionals. This can be an unfamiliar and unnecessary process.
          </StyledParagraph>
          <StyledParagraph>
            By automatically creating POs, requesters save time by completing only the spend approval steps relevant to them.
            The finance team gains confidence knowing that each approved request is documented as spent in Procurify,
            ready for invoice processing. They save time chasing down requesters to verify their spending in Procurify.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ fontWeight: 'normal' }}>Research and User Interviews</div>
          <StyledParagraph>
            When I joined the project, there was a good overview of the customer’s current workflow and the problems they were having.
          </StyledParagraph>
          <div>Through talking to 10 customers, we knew:</div>
          <div>
            - After final approval is given on a RFO, Requesters or Financial Controllers manually create a PO
            for the sole purpose of ensuring spend documentation and allowing invoice processing steps to continue
          </div>
          <div>
            - Some customers may not see the request for order and the purchase order as separate steps
          </div>
          <div>
            - Some customers may not use or want to create POs at all
          </div>
          <div style={{ marginBottom: '40px' }}>
            - Because an advanced license is required to create POs in Procurify, this role is usually given
            to one or two people. This can be very time consuming task
          </div>
          <StyledParagraph>
            This also ruled out a possible solution, which was to get rid of POs altogether. It’s common for wholesale and construction
            vendors to require a PO or PO number at the time of order. This means a PO still needs to be created after the request has been
            approved. Although it is mostly antiquated, the purchase order is still recognized by the procurement and accounting industries
            as an essential ‘source of truth’ for spend tracking.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ fontWeight: 'normal' }}>The Solution So Far</div>
          <StyledParagraph>
            Procurify’s spend capture process can be summarized in 4 high level steps. A request for order is created (Request),
            it is approved (Approvals), a purchase order is created and goods and services are purchased (Procure) and marked as received (Receive).
            To automatically create a PO, all necessary information needs to be captured when the request for order is approved (Approvals).
            This information included detailed item information which comes from Request and vendor information which comes from Request if the
            vendor already exists in the system or from Procure if the vendor has to be created.
          </StyledParagraph>
          <StyledParagraph>
            This is the biggest challenge with auto PO creation: for a PO to be created before the procurement step in Procurify,
            the vendor has to exist. But the only place where this is possible is through the process of manually creating a PO in Procure.
            This is in direct conflict with the goal of auto PO creation which is to keep users out of Procure as much as possible.
          </StyledParagraph>
          <StyledParagraph>
            This is not an issue for customers who have dedicated purchasing teams responsible for having this information.
          </StyledParagraph>
          <StyledParagraph>
            The solution so far had been to introduce a setting that allows approvers to create vendors during the approval process.
          </StyledParagraph>
          <div>Some common feedback on this solution included:</div>
          <div>
            - Low confidence if approvers will have the necessary information to explicitly create a vendor
          </div>
          <div>
            - How much vendor information approvers have varied a lot from customer to customer
          </div>
          <div style={{ marginBottom: '40px' }}>
            - The vendor vetting and creation process also varies a lot from customer to customer.
            This varied from needing only the name of the vendor to needing specific tax forms from the requesters
          </div>
          <StyledParagraph>
            This solution focused on the wrong assumption that it should be approvers who create new vendors for auto PO.
            The question is not how much vendor information approvers have, it’s whether or not they are the right group that
            has this information at all. What is most important at approvals is the actual approval itself, not vendor creation.
            This is also contradictory to one of the findings that requesters are usually purchasers. Given this information,
            it can be assumed that requesters will have the most information about vendors.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ fontWeight: 'normal' }}>Changes to the solution & more user interviews</div>
          <StyledParagraph>
            With this in mind, I proposed 2 changes:
          </StyledParagraph>
          <StyledParagraph>
            1. Expose more vendor information that can be filled by the Requester
          </StyledParagraph>
          <StyledParagraph>
            Requesters will now be able to optionally fill in more vendor information. The input fields are
            the same as the vendor creation form in ‘Procure’. This allows us to capture more information about the vendor and
            fill out more fields in an auto-created PO whenever possible.
          </StyledParagraph>
          <StyledParagraph>
            There will be a check at this stage (unique vendor validation) to ensure that the name of the new vendor
            is unique to minimize vendor duplication. When a requester starts typing the name of a vendor, a dropdown list of
            existing vendor options will appear that matches what was typed in so far. For example, if a user types ‘St...’,
            the dropdown list might show ‘Starbucks’ and ‘Staples’. Clicking on an option from this dropdown will update the vendor
            name field with an existing vendor. If the user decides to ignore this and type out a vendor name in full, they will
            get an error informing them that there is already a vendor that matches this name. Requesters will not be able to create
            the request for order with this error.
          </StyledParagraph>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgs.procurifyRequestBefore.childImageSharp.fluid}
            content='Previous request page. Requesters can only fill in vendor name'
            screenshot
          />
          <ImageWithCaption
            source={imgs.procurifyRequestAfter.childImageSharp.fluid}
            content='Auto PO request page. Requesters can fill in more vendor information if they wish to'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph style={{ paddingTop: '40px' }}>2. Automatically create new vendors after final approval</StyledParagraph>
          <StyledParagraph>
            For customers with auto PO, the primary permission groups are requesters and approvers. Out of the two,
            it makes more sense for the vendor to be created at the approval stage.
          </StyledParagraph>
          <div>
            - There is also a risk that if a vendor is created at the request stage and the request is later rejected,
            there is now a vendor that will show up in the vendor list that should not be used
          </div>
          <div style={{ marginBottom: '40px' }}>
            - If the vendor information is wrong, approvers can reject the request or edit the vendor information.
            This is available to any approver in the approval routing
          </div>
        </ContentContainer>
        <ImagesFlexContainer>
          <ImageWithCaption
            source={imgs.procurifyApproveBefore.childImageSharp.fluid}
            content='Auto PO approve page. Approvers are told this vendor will be automatically created'
            screenshot
          />
          <ImageWithCaption
            source={imgs.procurifyApproveAfter.childImageSharp.fluid}
            content='Auto PO approval page. After approvals, approvers are told a PO has been created'
            screenshot
          />
        </ImagesFlexContainer>
        <ContentContainer>
          <StyledParagraph style={{ paddingTop: '40px' }}>
            There was a technical consideration that we could overload the system if too many vendors were created at once.
            To see how likely this was, we took a look at current product usage and found that new vendors are created at a rate
            that can be well supported.
          </StyledParagraph>
          <div>- On average, there are just over 2000 POs created daily</div>
          <div>- Out of those POs created, only 4.5% are created using a new vendor</div>
          <div style={{ marginBottom: '40px' }}>- Only 5.25% of request for orders have more than 1 vendor (Data starting from end of 2020)</div>
          <StyledParagraph>
            With the updated solution, the only thing that requesters need to do is create a request and add additional vendor
            information as needed. The only thing that approvers need to do is to make sure the information is correct
            and approve the request.
          </StyledParagraph>
          <StyledParagraph>
            We went back to the same group of customers we interviewed before with the new iteration. We were able to confirm our
            hypothesis that this solution provides minimal interruptions to the requesters’ and approvers’ current processes.
          </StyledParagraph>
        </ContentContainer>
        <ContentContainer>
          <div style={{ fontWeight: 'normal' }}>Metrics & What's Next</div>
          <StyledParagraph>
            Auto PO was released in June of 2021. We forecasted that within the first 12 months, 40-50% of our customers
            (~200-250 customers) would have adopted this feature. As of writing this case study, we are 8 months in and we
            have about 80 customers, which is 32-40% of the target.
          </StyledParagraph>
          <StyledParagraph>
            We are continually gathering data from customers to see what could increase adoption. Top features identified
            for the next iteration of auto PO.
          </StyledParagraph>
        </ContentContainer>
      </CaseStudyContainer>
    </Layout>
  )
}

export default Procurify
