import * as React from "react"
import PropTypes from "prop-types"

import "./index.scss"

const Layout = ({ children }) => {

  return (
    <>
      <div className="layout-container">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout