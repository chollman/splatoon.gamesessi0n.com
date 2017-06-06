import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GameSessionsList } from '../../components'
import { testAPI } from '../../actions'

class GameSessionsListContainer extends React.Component {
  componentWillMount () {
    this.props.testAPI()
  }
  render () {
    return (
      <div>
        <GameSessionsList
          gameSessions={this.props.gameSessions}
          games={this.props.games}
        />
      </div>
    )
  }
}

GameSessionsListContainer.propTypes = {
  gameSessions: PropTypes.array,
  games: PropTypes.array,
  testAPI: PropTypes.func
}

function mapStateToProps (state) {
  return {
    gameSessions: state.gameSessions,
    games: state.games.items
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ testAPI }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSessionsListContainer)
