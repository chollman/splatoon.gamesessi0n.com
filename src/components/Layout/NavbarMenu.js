import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import Navbar from 'react-bootstrap/lib/Navbar'
import PropTypes from 'prop-types'
import { FacebookLogin } from 'react-facebook-login-component'

const responseFacebook = (response) => {
  // console.log(response)
  // GUARDAR USUARIO EN DB
  // anything else you want to do(save to localStorage)...
}

const testFB = () => {
  FB.getLoginStatus(function (response) {
    // console.log(response)
  })
}

const logout = () => {
  FB.logout(function (response) {
    // console.log(response)
  })
}

const NavigationLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul className="nav navbar-nav">
      <NavLink to="/">Home</NavLink>
    </ul>
    : null
}

const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul className="nav navbar-nav navbar-right">
      <li><a>Crear sesión</a></li>
      <NavLink to="/logout">Salir</NavLink>
    </ul>
    : <ul className="nav navbar-nav navbar-right">
      <li>
        <a onClick={testFB} href="#">Test FB ID</a>
      </li>
      <li>
        <a onClick={logout} href="#">Logout</a>
      </li>
      <li>
        <FacebookLogin socialId="yourAppID"
          language="en_ES"
          scope="public_profile,email"
          responseHandler={responseFacebook}
          xfbml={true}
          fields="id,email,name"
          version="v2.5"
          class="facebook-login"
          buttonText="Login With Facebook"/>
      </li>
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
