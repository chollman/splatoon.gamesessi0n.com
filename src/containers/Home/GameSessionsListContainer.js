import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GameSessionsList from '../../components/Home/GameSessionsList'
// import { bindActionCreators } from 'redux'

// import { initStore } from '../../store'
// import GameSessionItem from '../components/GameSessionItem'

class GameSessionsListContainer extends React.Component {
  render () {
    return (
      <div>
        <GameSessionsList gameSessions={this.props.gameSessions} />
      </div>
    )
  }
}

GameSessionsListContainer.propTypes = {
  gameSessions: PropTypes.array
}

function mapStateToProps (state) {
  return {
    gameSessions: state.gameSessions
  }
}

export default connect(mapStateToProps)(GameSessionsListContainer)
