import React from 'react';

import './cv.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Cv = () => (
  <div className="cv">
    <a
      href="./vipul_dessai_11_09_1992_react_developer.pdf"
      target="_blank"
      rel="noopener noreferrer">
      Download CV&nbsp;
      <FontAwesomeIcon
        icon={icon({ prefix: 'fas', iconName: 'file-download' })}
      />
    </a>
  </div>
);

export default Cv;
