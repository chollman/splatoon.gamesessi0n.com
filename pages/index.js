import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import { Layout } from '../src/components'
import LoadingBar from 'react-redux-loading-bar'
import { GameSessionsListContainer, AuthenticationContainer } from '../src/containers'
import { testAPI } from '../src/actions'
import { bindActionCreators } from 'redux'

import { VARIABLES } from '../src/constants'

// const API_KEY = process.env.YOUTUBE_API_KEY

class Index extends React.Component {
  render () {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: '#cdf523', height: '3px', zIndex: 1 }}/>
        <AuthenticationContainer>
          <Layout>
            <div className="container inkling-girl">
              <div className="row">
                <div className="col-md-12">
                  <h1>Splatoon 2</h1>
                  <GameSessionsListContainer />
                </div>
              </div>
            </div>
          </Layout>
        </AuthenticationContainer>

        <style jsx>{`
          h1 {
            color: ${VARIABLES.GREEN};
          }
          .inkling-girl {
            min-height: 500px;
            background-size: contain;
            background-position: right;
          }
          `}</style>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gamesFetching: state.games.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ testAPI }, dispatch)
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
