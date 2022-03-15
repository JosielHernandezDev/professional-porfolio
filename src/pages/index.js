import * as React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { PersonalPresentation, WhatDo,Education, Projects } from "../components/sections"

import "../components/fontawesome"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={"Josiel Hernandez FrontEnd Developer"} />
       <PersonalPresentation />
      <WhatDo />
      <Education />
      <Projects/>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `
