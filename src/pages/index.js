import React from 'react'
import Link from 'gatsby-link'
import picture from '../images/lhernand.jpg'
const IndexPage = () => (
  <div>
    <h1>I'm Leo</h1>
    <p>This is my Gatsby site ^_^</p>
    <p>I attend 42 silicon valley where I'm learning computer science.</p>
    <img src={picture} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
