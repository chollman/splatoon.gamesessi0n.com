import React from 'react'
import NavbarMenu from './NavbarMenu'

const Header = () => (
  <div className="header">
    <NavbarMenu isAuthed={true}/>
  </div>
)

export default Header
