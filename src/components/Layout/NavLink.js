import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

class NavLink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'isActive': ''
    }
  }

  componentDidMount () {
    const isActive = Router.route === this.props.to ? 'active' : ''
    this.setState({'isActive': isActive})
  }

  render () {
    return (
      <li className={this.state.isActive}>
        <Link href={this.props.to}>
          <a>{this.props.children}</a>
        </Link>
      </li>
    )
  }
}

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default NavLink
