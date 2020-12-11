import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

import ImageLoader from "../images/imageLoader"

import "./footer.scss"

const Footer = () => (
  <div className="footer">
    <h3 className="title">My Side Projects</h3>
    <div className="projects">
      <a className="project" href="https://swak.netlify.app/" target="_blank" rel="noopener noreferrer"><div><ImageLoader imageUrl={"swak.jpg"} /></div>  </a>
      <a aria-label="ingredo fit" className="project" href="https://ingredofit-uat.netlify.app/" target="_blank" rel="noopener noreferrer"><div><ImageLoader imageUrl={"ingredo-fit.jpg"} /></div></a>
    </div>
    <div className="links">
      <a aria-label="github" className="link" href="https://github.com/vipulDessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'github' })} /></a>
      <a aria-label="stack overflow" className="link" href="https://stackoverflow.com/users/5720826/vipul-dessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'stack-overflow' })} /></a>
      <a aria-label="tweet" className="link" href="https://twitter.com/vipul_dessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'twitter' })} /></a>
      <a aria-label="linkedin" className="link" href="https://www.linkedin.com/in/vipul-dessai-a39b2ba3/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'linkedin' })} /></a>
      <a aria-label="code pen" className="link" href="https://codepen.io/badgamerbad" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'codepen' })} /></a>
      <a aria-label="medium" className="link" href="https://medium.com/@badgamerbad" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'medium' })} /></a>
      <a aria-label="dev to" className="link" href="https://dev.to/badgamerbad" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'dev' })} /></a>
    </div>
  </div>
)

export default Footer