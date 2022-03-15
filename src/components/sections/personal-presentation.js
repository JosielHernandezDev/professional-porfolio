import React, { useState, useEffect, Suspense, lazy } from "react"

import { graphql } from "gatsby"
// import { useTranslation } from "gatsby-plugin-react-i18next"

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Loading from "../loading/loading"

import "../../styles/config.scss"

import { openSource } from "../../porfolio"

const PersonalPresentation = props => {
  const renderLoader = () => <Loading />

  const [profileData, setProfileData] = useState(null)
  const [image, setImage] = useState()
  // const { t } = useTranslation()

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json()
          }
          throw result
        })
        .then(response => {
          setProfileData(response.data.user)
          setImage(response.data.user.avatarUrl)
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          )
          setProfileData(null)
        })
    }
    getRepoData()
  }, [])

  return (
    <div className="position-relative personal-section">
      <section id="me" className="section section-lg section-shaped ">
        <div className="shape shape-style-1 bg-gradient-info">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="py-lg-md d-flex container content-container">
          <div className="col">
            <div className="row">
              {/* <Suspense fallback={renderLoader()}> */}
                <div className="col-lg-6 m-auto">
                  <h1 className="display-3 text-white">
                    {profileData?.name || ""}
                  </h1>
                  <p className="lead text-white">
                    {profileData?.bio || ""}
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  {/* <Suspense fallback={renderLoader()}> */}
                    {image && (
                      <img
                        loading="lazy" 
                        className="responsive"
                        src={image}
                        alt={profileData?.name || "profile"}
                      />
                    )}
                  {/* </Suspense> */}
                </div>
              {/* </Suspense> */}
              <div className="col-lg-12 pt-5">
                <div className="row justify-content-center">
                  <div className="container-social-icon col-3">
                    <div className="btn-icon-only rounded-circle ml-1">
                      <StaticImage
                        src="../../images/social/instagram.png"
                        width={48}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Josiel_Hernandez"
                        style={{ marginBottom: `1.45rem` }}
                      />
                    </div>
                    <a
                      href="https://www.instagram.com/josiel_hernandez"
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram"
                      className="p-2"
                    >
                      <h2 className="d-flex">@Josiel_Hernandez</h2>
                    </a>
                  </div>
                  <div className="container-social-icon col-3">
                    <div className="btn-icon-only rounded-circle ml-1">
                      <StaticImage
                        src="../../images/social/github.png"
                        width={48}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="JosielDev"
                        style={{ marginBottom: `1.45rem` }}
                      />
                    </div>
                    <a
                      href="https://github.com/JosielHernandezDev"
                      target="_blank"
                      rel="noopener"
                      aria-label="github"
                      className="p-2"
                    >
                      <h2 className="d-flex">JosielHernandezDev</h2>
                    </a>
                  </div>
                  <div className="container-social-icon col-3">
                    <div className="btn-icon-only rounded-circle ml-1">
                      <StaticImage
                        src="../../images/social/linked.png"
                        width={48}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="JosielDev"
                        style={{ marginBottom: `1.45rem` }}
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/josielhernandez/"
                      target="_blank"
                      rel="noopener"
                      aria-label="linkedin"
                      className="p-2"
                    >
                      <h2 className="d-flex">Josiel Hernandez</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    </div>
  )
}

PersonalPresentation.propTypes = {}

PersonalPresentation.defaultProps = {}

export default PersonalPresentation

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
