import { combineReducers } from 'redux';
import GameSessionReducer from './reducer_game-session';

const rootReducer = combineReducers({
    gameSessions: GameSessionReducer
});

export default rootReducer;
