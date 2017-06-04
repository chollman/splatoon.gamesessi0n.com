import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import Navbar from 'react-bootstrap/lib/Navbar'
import PropTypes from 'prop-types'

const NavigationLinks = ({isAuthed}) => {
  return isAuthed === true ?
    <ul className="nav navbar-nav">
      <NavLink to="/">Home</NavLink>
    </ul>
    : null
}

const ActionLinks = ({isAuthed}) => {
  return isAuthed === true ?
    <ul className="nav navbar-nav navbar-right">
      <li><a>Crear sesión</a></li>
      <NavLink to="/logout">Salir</NavLink>
    </ul>
    :
    <ul className="nav navbar-nav navbar-right">
      <NavLink to="/login">Login</NavLink>
    </ul>
}

const NavbarMenu = ({isAuthed}) => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/">
              <a className="navbar-brand"><img alt="Brand" src="/static/img/logo.png" width="100" height="57" /></a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <NavigationLinks isAuthed={isAuthed} />
          <ActionLinks isAuthed={isAuthed} />
        </Navbar.Collapse>
        <div className="drips"></div>
      </Navbar>

      <style jsx>{`
        a.active {
          color: red;
        }
        .drips {
          content: "";
          background-image: url('/static/img/drips.svg');
          background-repeat: repeat-x;
          display: block;
          left: 0;
          right: 0;
          bottom: -39px;
          width: 100%;
          position: absolute;
          height: 40px;
        }
        .navbar-nav .active>a {
          background-color: #cdf523;
          background-image: none;
        }
      `}</style>
    </div>
  )
}

NavbarMenu.propTypes = ActionLinks.propTypes = NavigationLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default NavbarMenu
