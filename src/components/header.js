import * as React from "react"
import PropTypes from "prop-types"
// import { Link, useI18next } from "gatsby-plugin-react-i18next"

import { Container, Dropdown, Nav, Navbar, NavbarBrand } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

import { StaticImage } from "gatsby-plugin-image"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="language-toggle"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault()
      onClick(e)
    }}
  >
    {/* <FontAwesomeIcon icon={faGlobeEurope} size="md"></FontAwesomeIcon> */}
    <FontAwesomeIcon icon={faGlobeEurope}></FontAwesomeIcon>
  </a>
))

const Header = ({ siteTitle }) => {
  // const { languages, changeLanguage, language } = useI18next()

  return (
    <header className="navbar-transparent">
      <Navbar expand="lg" fixed="top" variant="light" className="color-nav" >
        <Container fluid>
          <NavbarBrand href="#me">
            <div className="logo-site-container">
              <StaticImage
                src="../images/logo.png"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="JosielDev"
              />
            </div>
          </NavbarBrand>
          <Navbar.Toggle
            aria-expanded="false"
            aria-controls="responsive-navbar-nav"
          />

          <Navbar.Collapse navbar id="responsive-navbar-nav">
            <Nav className="text-center">
              <Nav.Link href="#me">About me</Nav.Link>
              <Nav.Link href="#whatDo">What I do</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog" disabled>Blog</Nav.Link>
              {/* <Nav.Item className="m-auto">
                <Dropdown className="mx-3 ">
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="success"
                    id="dropdown-custom-components"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    {languages.map(lng => (
                      <Dropdown.Item
                        key={lng}
                        onClick={e => {
                          e.preventDefault()
                          changeLanguage(lng)
                        }}
                      >
                        {lng.toUpperCase()}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
