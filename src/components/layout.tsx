import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import {
  faStackOverflow,
  faTwitter,
  faGithub,
  faLinkedin,
  faCodepen,
  faMedium,
  faDev,
} from '@fortawesome/free-brands-svg-icons';

import './layout.scss';

import Header from './header';
import Footer from './footer';
import Cv from './cv';
import NetlifyForms from './netlifyForms';
import ImageLoader from '../images/imageLoader';

library.add(
  faStackOverflow,
  faTwitter,
  faGithub,
  faLinkedin,
  faCodepen,
  faMedium,
  faDev,
  faFileDownload,
);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main className="main-content">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <div>
          <h1>{'Hi people'}</h1>
          <p>{'Welcome to My Portfolio.'}</p>
          <p>
            {
              'My name is Vipul Dessai, a web developer based in India, I believe learning is a continuous process to build your dreams that will create magic, using the power of JavaScript, HTML and CSS'
            }
          </p>
          <div className="avatar">
            <ImageLoader imageUrl={'me.jpg'} />
          </div>
        </div>
        <Footer />
        <Cv />
        <NetlifyForms />© {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Gatsby
        </a>
      </div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
