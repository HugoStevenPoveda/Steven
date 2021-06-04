import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { Code } from 'react-feather'
import GlobalStyle from '../global'
import { NavbarElement, NavbarLogo } from '../navbar/style'

const NavbarSecond = ({ siteTitle }) => (


    <nav>
        <GlobalStyle />
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

            </NavbarElement>
        </div>
    </nav>




)
NavbarSecond.propTypes = {
    siteTitle: PropTypes.string,
}

NavbarSecond.defaultProps = {
    siteTitle: ``,
}


export default NavbarSecond
