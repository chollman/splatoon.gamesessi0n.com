import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Link from 'next/link'

// import { initStore } from '../../store'
// import GameSessionItem from '../components/GameSessionItem'

class GameSessionsList extends React.Component {
  renderSessions () {
    return (
      _.map(this.props.gameSessions, session => {
        let button = ''
        if (session.open) {
          button = <div>Abierta</div>
        }

        return <div key={session.id}>
          <li className="col-md-4">
            <h3>{session.type}</h3>
            <div>
              <h4>Players</h4>
              <ul>
                {session.players.map(player => {
                  return <li key={player.name}>{player.name}</li>
                })}
              </ul>
            </div>
            <span>{button}</span>
          </li>
        </div>
      })
    )
  }

  render () {
    return (
      <div>
        <span>Lista de sesiones</span>
        <ul className="row">
          {this.renderSessions()}
          <style jsx>{`
        h3, h4 { color: #cdf523 }
        div { padding-left: 30px; }
        `}</style>
        </ul>
      </div>
    )
  }
}

GameSessionsList.propTypes = {
  gameSessions: PropTypes.array
}

function mapStateToProps (state) {
  return {
    gameSessions: state.gameSessions
  }
}

export default connect(mapStateToProps)(GameSessionsList)
