/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import ImageLoader from "../images/imageLoader"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add( faStackOverflow, faTwitter, faGithub, faLinkedin )

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-content">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div>
          <h1>
            {"Hi people"}
          </h1>
          <p>
            {"Welcome to My Portfolio."}
          </p>
          <p>
            {"My name is Vipul Dessai, a web developer based in India, I believe learning is a continuous process to build your dreams that will create magic, using the power of HTML, CSS, JavaScript and now GatsbyJs."}
          </p>
          <div className="avatar">
            <ImageLoader imageUrl={"me.jpg"}/>
          </div>
        </div>
        <footer>
          <Footer />
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout