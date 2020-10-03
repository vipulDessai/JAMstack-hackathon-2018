import React from "react"

import "./cv.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Cv = () => (
  <div className="cv">
    <a href="./cv_aug_2020.pdf">Download CV&nbsp;<FontAwesomeIcon icon={icon({ prefix: 'fa', iconName: 'file-download' })} /></a>
  </div>
)

export default Cv