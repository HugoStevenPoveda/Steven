import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Code, Mail } from 'react-feather'

import { NavbarElement, NavbarList, NavbarLogo } from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <Link to="/">
              <Code className="align-middle" />
              <span className="align-middle"> {siteTitle} </span>
            </Link>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            <li><Link to="/about" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li>
            <li><Link to="/portafolio" className="lined-link" activeClassName="active"> <Briefcase /> <span> Portfolio </span> </Link></li>
            <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li>

            <li><Link to="contact" className="lined-link" activeClassName="active"> <Mail /> <span> Contact </span> </Link></li>

          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
