import { graphql, useStaticQuery } from "gatsby";

export const useImages = () => {
  return useStaticQuery(graphql`
    query {
      needForSpeed: file(relativePath: { eq: "ea-need-for-speed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480 quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peggleBlast: file(relativePath: { eq: "ea-peggle-blast.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480 quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sims: file(relativePath: { eq: "ea-sims.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480 quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bejeweled: file(relativePath: { eq: "ea-bejeweled.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480 quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      aboutToPresent: file(relativePath: { eq: "mediavalet-present.jpg" }) {
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
      iaReview: file(relativePath: { eq: "mediavalet-review.jpg" }) {
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
      untitledSection: file(relativePath: { eq: "mediavalet-untitled-section.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sideMenu: file(relativePath: { eq: "mediavalet-side-menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyApproveAfter: file(relativePath: { eq: "procurify-approve-after.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyApproveBefore: file(relativePath: { eq: "procurify-approve-before.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyLofi1: file(relativePath: { eq: "procurify-lofi-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyLofi2: file(relativePath: { eq: "procurify-lofi-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyRequestBefore: file(relativePath: { eq: "procurify-request-before.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurifyRequestAfter: file(relativePath: { eq: "procurify-request-after.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      procurify: file(relativePath: { eq: "procurify.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediaValet: file(relativePath: { eq: "mediavalet.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      neighbourhood: file(relativePath: { eq: "neighbourhood.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      electronicArts: file(relativePath: { eq: "ea.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chevron: file(relativePath: { eq: "back.png" }) {
        childImageSharp {
            fixed(width: 6, height: 16) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `);
};
