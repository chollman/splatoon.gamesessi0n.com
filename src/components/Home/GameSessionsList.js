import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

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

  renderGames () {
    return (
      _.map(this.props.games, game => {
        return <div key={game.id}>
          <li className="col-xs-12">
            <h3>{game.name}</h3>
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
        <ul className="row">
          {this.renderGames()}
        </ul>
      </div>
    )
  }
}

GameSessionsList.propTypes = {
  gameSessions: PropTypes.array,
  games: PropTypes.array
}

export default GameSessionsList
