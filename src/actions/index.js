import axios from 'axios'

import { GAMES_REQUEST, GAMES_SUCCESS } from '../constants'

const ROOT_URL = 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/'
const API_KEY = 'setXnX3oURmshvl2yiMdH6PMPiGhp1DAQNcjsnQnZPymKHXUhJ'

export function testAPI () {
  const request = axios({
    method: 'get',
    baseURL: ROOT_URL + '?fields=*&limit=10&offset=0&order=release_dates.date%3Adesc&search=zelda',
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': 'application/json'
    }
  })

  return (dispatch) => {
    dispatch({type: GAMES_REQUEST})
    request.then(({data}) => {
      dispatch({type: GAMES_SUCCESS, payload: data})
    })
  }
}
