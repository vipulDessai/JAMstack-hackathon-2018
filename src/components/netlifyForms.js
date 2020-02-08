import React from "react"

import "./netlifyForms.scss"

const NetlifyForms = () => (
  <form class="contact-form" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
    <ul>
      <li>
        <ul>
          <li><label htmlFor="name">Name</label></li>
          <li><input name="name" placeholder="Name" type="text" required></input></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><label htmlFor="email">Email</label></li>
          <li><input name="email" placeholder="Email" type="email" required></input></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><label htmlFor="phone">Phone</label></li>
          <li><input name="phone" placeholder="Phone" type="text"></input></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><label htmlFor="message">Message</label></li>
          <li><textarea name="message" rows="3" required></textarea></li>
        </ul>
      </li>
      <li><button type="submit">Submit</button></li>
    </ul>
  </form>
)

export default NetlifyForms