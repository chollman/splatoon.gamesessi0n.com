import React from 'react'
import PropTypes from 'prop-types'

/**
 * AuthenticationContainer
 */
export class AuthenticationContainer extends React.Component {
  componentDidMount () {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1885289455071245',
        cookie: true,
        xfbml: true,
        version: 'v2.9'
      })
      FB.AppEvents.logPageView()
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

AuthenticationContainer.propTypes = {
  children: PropTypes.element
}

export default AuthenticationContainer
