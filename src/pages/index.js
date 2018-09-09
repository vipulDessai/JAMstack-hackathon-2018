import React from 'react';
import Link from 'gatsby-link';

import Avatar from '../images/me.jpg';

const MySoul = props =>
  <div>
    <h1>
      {props.hello_line}
    </h1>
    <p>
      {props.welcome_line}
    </p>
    <p>
      {props.my_description}
    </p>
    <img className="avatar" src={Avatar} alt="" />
  </div>

const IndexPage = () => (
  <div className="main-content">
    <MySoul
      hello_line = "Hi people"
      welcome_line = "Welcome to My Gatsby site."
      my_description = "I'm a web developer based in India, I believe learning is a continuous process
       to build your dreams that will create magic, 
       using the power of HTML, CSS, JavaScript and now GatsbyJs."
    />
    <div className="footer">
      <Link className="custom-link" to="/page-2/">Go to Page 2</Link>
    </div>
  </div>
)

export default IndexPage