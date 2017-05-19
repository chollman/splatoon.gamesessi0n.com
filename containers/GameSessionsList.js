import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { initStore } from '../store'

class GameSessionsList extends React.Component {
    test() {
        console.log(this.props.gameSessions);
    }

    render() {
        return (
            <div>
                <span>Lista de sesiones</span>
                <ul>
                    {this.props.gameSessions.map(session => {
                        //TODO Crear componente
                        return <li key={session.id}>
                            <h3>Game</h3>
                            <span>{session.game}</span>
                            <div>
                                <h4>Players</h4>
                                <ul>
                                    {session.players.map(player => {
                                        return <li key={player.name}>{player.name}</li>
                                    })}
                                </ul>
                            </div>
                        </li>;
                    })}
                    <style jsx>{`
                        h3, h4 { color: #cdf523 }
                        div { padding-left: 30px; }
                    `}</style>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameSessions: state.gameSessions
    };
}

export default connect(mapStateToProps)(GameSessionsList);
