import * as React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto text-center">
        <strong>Carlos Josiel Hernandez Sanchez</strong> • Todos los derechos reservados ©{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer;