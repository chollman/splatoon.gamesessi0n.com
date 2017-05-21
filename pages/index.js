import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../src/components/MyLayout'
import GameSessionsList from '../src/containers/GameSessionsList'

import { VARIABLES } from '../src/constants'

// const API_KEY = process.env.YOUTUBE_API_KEY

const Index = () => (
  <div>
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <h1>Splatoon 2</h1>
            
            <GameSessionsList />
          </div>
          <div className="col-md-4">
            <div className="inkling-girl pull-right"></div>
          </div>
        </div>
      </div>
    </Layout>

    <style jsx>{`
      .container-fluid {
        max-width: 1170px;
      }
      h1 {
        color: ${VARIABLES.GREEN};
      }
      .inkling-girl {
        position: absolute;
        right: 0;
        top: 0;
        width: 670px;
        height: 500px;
        background: url(/static/img/inkling-girl2.png) no-repeat;
        background-size: cover;
      }
      `}</style>
  </div>
  )

export default withRedux(initStore, null)(Index)
