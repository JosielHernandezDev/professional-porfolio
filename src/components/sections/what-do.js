import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const WhatDo = () => {
  return (
    <section id="whatDo" className="container mt-5 ">
      <div className="row">
        <div className="col-12 text-center">
          <h1>What I Do</h1>
          <p className="lead">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap mt-4">
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="html-5"
            >
              <StaticImage
                src="../../images/skills/html5.svg"
                width={100}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="html-5"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="css3"
            >
              <StaticImage
                src="../../images/skills/css.svg"
                width={100}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="css3"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="sass"
            >
              <StaticImage
                src="../../images/skills/sass.svg"
                width={100}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="sass"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="js"
            >
              <StaticImage
                src="../../images/skills/js.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="js"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="ts"
            >
              <StaticImage
                src="../../images/skills/ts.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="ts"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="react"
            >
              <StaticImage
                src="../../images/skills/react.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="react"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center flex-wrap ">
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="angular"
            >
              <StaticImage
                src="../../images/skills/angular.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="angular"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="node"
            >
              <StaticImage
                src="../../images/skills/node.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="node"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="npm"
            >
              <StaticImage
                src="../../images/skills/npm.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="npm"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="mongo"
            >
              <StaticImage
                src="../../images/skills/mongo.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="mongo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center flex-wrap mb-5">
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="git"
            >
              <StaticImage
                src="../../images/skills/git.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="git"
              />
            </div>
            <div
              className="icon icon-lg icon-shape shadow rounded-circle mb-5"
              id="docker"
            >
              <StaticImage
                src="../../images/skills/docker.svg"
                width={80}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="docker"
              />
            </div>
          </div>
        </div>
        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="col-12"></div>
      </div>
      <div className="row ">
        <div className="col-12 text-center">
          <p>
            &#129299; Develop highly interactive Front end / User Interfaces for
            your web and mobile applications
          </p>
        </div>
        <div className="col-12 text-center">
          <p>
            &#128525; Progressive Web Applications ( PWA ) in normal and SPA
            Stacks
          </p>
        </div>
        <div className="col-12 text-center">
          <p>
            ⭐️ Integration of third party services such as Firebase/ AWS /
            Digital Ocean
          </p>
        </div>
      </div>
    </section>
  )
}

WhatDo.propTypes = {}

WhatDo.defaultProps = {}

export default WhatDo
