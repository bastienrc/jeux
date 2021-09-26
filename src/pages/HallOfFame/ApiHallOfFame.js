import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const HALLOFFAME_API_BASE_URL = BASE_URL + '/halloffame'

class HallOfFame {
  getHallOfFames () {
    return axios.get(HALLOFFAME_API_BASE_URL)
  }

  getNbHallOfFames () {
    return axios.get(HALLOFFAME_API_BASE_URL + '-count')
  }

  createHallOfFame (halloffame) {
    return axios.post(HALLOFFAME_API_BASE_URL, halloffame)
  }

  getHallOfFameById (halloffameId) {
    return axios.get(HALLOFFAME_API_BASE_URL + '/' + halloffameId)
  }

  updateHallOfFame (halloffame, halloffameId) {
    return axios.put(HALLOFFAME_API_BASE_URL + '/' + halloffameId, halloffame)
  }

  deleteHallOfFame (halloffameId) {
    return axios.delete(HALLOFFAME_API_BASE_URL + '/' + halloffameId)
  }
}

export default new HallOfFame()
