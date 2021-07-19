import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0 3rem 3rem;
  border-radius: 3px;
  background-color: #208075;
`

const WordSearch = styled.p`
  padding: 1rem;
  letter-spacing: 1rem;
  font-size: 3rem;
  font-family: monospace;
`

const Keyboard = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  margin: 0.5rem;
  padding: 0.3rem;
  background-color: #17db4b;
  border-radius: 3px;
`

const Key = styled.span`
  margin: 0.1rem;
  line-height: 2rem;
  border-radius: 3px;
  background-color: white;
  &&:hover {
    background-color: #DEDEDE;
  }
`

const Used = styled.span`
  background-color: grey;
  color: darkgrey;
`

const Animation = styled.div`
  position: relative;
  background-color: blue;
  width: 100%;
  height: 300px;
`

const Score = styled.div`
  position: absolute;
  top : 0;
  right: 0;
  width: 70px;
  height: 70px;
  background-color: cyan;
  padding-top: 15px;
  border-radius: 0% 0% 0% 100%;
`

const Pendu = () => {
  const [score, setScore] = useState(5)
  const [word, setWord] = useState('polochon')
  const [usedLetters, setUsedLetters] = useState([])

  const Keys = [
    'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'w', 'x', 'c', 'v', 'b', 'n'
  ]

  const words = ['pomme', 'fraise', 'orange', 'banane', 'clementine', 'kiwi']

  const wordRandom = (words) => {
    const min = Math.ceil(0)
    const max = Math.floor(words.length - 1)
    const nbRandom = Math.floor(Math.random() * (max - min + 1)) + min
    return words[nbRandom]
  }

  const computeDisplay = (word, usedLetters) => {
    return word.replace(
      /\w/g,
      letter => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  return (
    <Layout pageTitle='Le Jeu du Pendu'>
      <Container>
        <Animation>
          <Score>{score}</Score>
        </Animation>
        <WordSearch>
          {computeDisplay(word, usedLetters)}
        </WordSearch>
        <Keyboard>
          {
            Keys.map(letter => (
              <Key
                key={letter}
                onClick={e => setUsedLetters([...usedLetters, letter])}
              >
                {letter}
              </Key>
            ))
          }
        </Keyboard>
      </Container>
    </Layout>
  )
}

export default Pendu

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       keys: [
//         'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
//         'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
//         'w', 'x', 'c', 'v', 'b', 'n'
//       ],
//       word: this.wordRandom(words),
//       usedLetters: new Set(),
//       score: 0
//     }
//   }

//   // Produit une représentation textuelle de l’état de la partie,
//   // chaque lettre non découverte étant représentée par un _underscore_.

//   handleKeyClick (letter) {
//     // Gestion des lettres utilisées
//     const { usedLetters } = this.state
//     usedLetters.add(letter)
//     this.setState({ usedLetters })

//     // Gestion du score
//     this.setState({ score: this.state.score + 1 })

//     // Message de Victoire
//     const myWord = new Set(this.state.word)
//     if (new Set([...myWord].filter(x => !usedLetters.has(x))).size === 0) {
//       alert('Victoire en ' + this.state.score + ' tentatives')
//     }
//   }
