import axios from 'axios'

const SCORE_API_BASE_URL = 'http://localhost:5000/api/score'

class Score {
  getScores () {
    return axios.get(SCORE_API_BASE_URL)
  }

  createScore (score) {
    return axios.post(SCORE_API_BASE_URL, score)
  }

  getScoreById (scoreId) {
    return axios.get(SCORE_API_BASE_URL + '/' + scoreId)
  }

  updateScore (score, scoreId) {
    return axios.put(SCORE_API_BASE_URL + '/' + scoreId, score)
  }

  deleteScore (scoreId) {
    return axios.delete(SCORE_API_BASE_URL + '/' + scoreId)
  }
}

export default new Score()
