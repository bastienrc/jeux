const userScores = [
  {
    id: 1,
    nameOfGame: 'Pendu',
    score: 1000,
    date: '2021-09-05T09:33:29.625Z'
  },
  {
    id: 2,
    nameOfGame: 'Snake',
    score: 1000,
    date: '2021-09-06T09:33:29.625Z'
  },
  {
    id: 3,
    nameOfGame: 'Flashcard',
    score: 1000,
    date: '2021-09-06T09:33:29.625Z'
  },
  {
    id: 4,
    nameOfGame: 'Flashcard',
    score: 1000,
    date: '2021-09-07T09:33:29.625Z'
  },
  {
    id: 5,
    nameOfGame: 'Pendu',
    score: 1000,
    date: '2021-09-02T09:33:29.625Z'
  }
]

function Score () {
  return (
    <div>
      <h4>Mes Scores</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Jeux</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userScores.map(({ id, nameOfGame, score, date }) => (
            <tr key={id} className='table-active'>
              <th scope='row'>{id}</th>
              <td>{nameOfGame}</td>
              <td>{score}</td>
              <td>{date.substr(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Score
