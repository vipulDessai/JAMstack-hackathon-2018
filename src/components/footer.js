import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

import Swak from '../images/swak.jpg';
import IngredoFit from '../images/ingredo-fit.jpg';

import "./footer.scss"

const Footer = () => (
  <div className="footer">
    <p>My Side Projects</p>
    <div className="projects">
      <a className="project" href="https://www.swak.co.in/" target="_blank" rel="noopener noreferrer"><img src={Swak} alt="" /></a>
      <a className="project" href="https://ingredofit-uat.netlify.com/" target="_blank" rel="noopener noreferrer"><img src={IngredoFit} alt="" /></a>
    </div>
    <div className="links">
      <a className="link" href="https://github.com/vipulDessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'github' })} /></a>
      <a className="link" href="https://stackoverflow.com/users/5720826/vipul-dessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'stack-overflow' })} /></a>
      <a className="link" href="https://twitter.com/vipul_dessai" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'twitter' })} /></a>
      <a className="link" href="https://www.linkedin.com/in/vipul-dessai-a39b2ba3/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'linkedin' })} /></a>
    </div>
  </div>
)

export default Footer