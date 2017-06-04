import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../src/components/Layout/MyLayout'
import GameSessionsListContainer from '../src/containers/Home/GameSessionsListContainer'

import { VARIABLES } from '../src/constants'

// const API_KEY = process.env.YOUTUBE_API_KEY

const Index = () => (
  <div>
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

    <style jsx>{`
      h1 {
        color: ${VARIABLES.GREEN};
      }
      .inkling-girl {
        min-height: 500px;
        background: url(/static/img/inkling-girl2.png) no-repeat;
        background-size: contain;
        background-position: right;
      }
      `}</style>
  </div>
  )

export default withRedux(initStore, null)(Index)
