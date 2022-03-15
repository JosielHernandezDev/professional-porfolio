import * as React from "react"

import { Card } from "react-bootstrap"
import { Fade } from "react-reveal"

const Education = () => {
  return (
    <div className="bg-gradient-info mt-5">
      <section id="education" className="section section-lg section-shaped">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white">Education and Certification</h1>
            </div>
            <div className="col-12 pt-5">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <Fade bottom duration={1000} distance="20px">
                    <Card className="card-education test">
                      <Card.Body>
                        <h3>Instituto Tecnologico Superior de Sanpedro</h3>
                        <p className="mb-2">Ing. En Sistemas Computacionales</p>
                        <div className="badge badge-info mb-3">
                          <p>Agust 2015 - Dec 2019</p>
                        </div>
                        <p>
                          Formar Ingenieros en Sistemas Computacionales, capaces
                          de diseñar, implementar y administrar tecnologías de
                          información y comunicación, aportando soluciones
                          innovadoras basadas en las necesidades de
                          almacenamiento, desarrollo y comunicación de
                          información de la sociedad.
                        </p>
                        {/* <div className="go-corner">
                        <div className="go-arrow">
                          <StaticImage
                            src="../../images/education/tecsanpedro.png"
                            width={500}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="tecsanpedro"
                          />
                        </div>
                      </div> */}
                      </Card.Body>
                    </Card>
                  </Fade>
                </div>
                <div className="col-12 col-lg-6">
                  <div></div>
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

export default Education
