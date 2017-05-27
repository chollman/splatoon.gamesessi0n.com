import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../src/components/MyLayout'
import GameSessionsList from '../src/containers/GameSessionsList'

import { VARIABLES } from '../src/constants'

// const API_KEY = process.env.YOUTUBE_API_KEY

const Test = () => (
  <div>
    <Layout>
      <div className="container inkling-girl">
        <div className="row">
          <div className="col-md-12">
            <h1>Splatoon 2</h1>
            <GameSessionsList />
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
        background-size: contain;
        background-position: right;
      }
      `}</style>
  </div>
  )

export default withRedux(initStore, null)(Test)
