import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from './anna_title.png'

import './index.css'

const Header = () =>
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'block',
        padding: '1.45rem 1.0875rem',
      }}
    >
     <div>
      <img src={logo} alt="Logo" />
      </div>
    </div>
    <div style={{textAlign:'center'}}>
      <Link to="/">About</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/resume/">Resume</Link> 
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Anna Melikhova"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
