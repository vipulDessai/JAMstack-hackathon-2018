/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody({setHeadComponents, setPreBodyComponents, setPostBodyComponents}) {
  setPostBodyComponents([
    <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>,
  ]);
}