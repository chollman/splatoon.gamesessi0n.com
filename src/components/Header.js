import React from 'react'
import Link from 'next/link'
import NavbarMenu from './NavbarMenu'

import { VARIABLES } from '../constants'

const Header = () => (
  <div className="header">
    <NavbarMenu />
    {/*<nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img alt="Brand" src="/static/img/logo.png" width="100" height="57" />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/test">
                <a>Test</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>*/}
  </div>
)

export default Header
