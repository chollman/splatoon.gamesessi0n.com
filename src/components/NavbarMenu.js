import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import Navbar from 'react-bootstrap/lib/Navbar'

class NavbarMenu extends React.Component {
  render () {
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
            <ul className="nav navbar-nav">
              <NavLink to="/">Home</NavLink>
            </ul>
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
}

export default NavbarMenu
