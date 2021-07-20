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
  &.${props => props.isActive} {
    background-color: grey;
    color: darkgrey;
  }
`

const Animation = styled.div`
  position: relative;
  background-color: greenyellow;
  color: orange;
  font-size: 3rem;
  width: 100%;
  height: 300px;
  padding-top: 15%;
`

const Score = styled.div`
  position: absolute;
  top : 0;
  right: 0;
  width: 70px;
  height: 70px;
  font-size: 1.5rem;
  color: white;
  background-color: cyan;
  padding-top: 15px;
  border-radius: 0% 0% 0% 100%;
`
const Pendu = () => {
  const [score, setScore] = useState(0)
  const [usedLetters, setUsedLetters] = useState([])
  const [animation, setAnimation] = useState('Salut')

  const wordRandom = (words) => {
    const min = Math.ceil(0)
    const max = Math.floor(words.length - 1)
    const nbRandom = Math.floor(Math.random() * (max - min + 1)) + min
    return words[nbRandom]
  }

  const words = ['pomme', 'fraise', 'orange', 'banane', 'clementine', 'kiwi']
  const [word] = useState(wordRandom(words))

  const Keys = [
    'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'w', 'x', 'c', 'v', 'b', 'n'
  ]

  const computeDisplay = (word, usedLetters) => {
    return word.replace(
      /\w/g,
      letter => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  const handleKeyClick = function (letter) {
    // Gestion des lettres utilisées
    setUsedLetters([...usedLetters, letter])

    // Gestion du score
    setScore(score + 1)

    // Message de Victoire
    if (new Set([...word].filter(x => !usedLetters.includes(x))).size === 1) {
      setAnimation(`Victoire en ${score + 1} tentatives`)
    }
  }

  return (
    <Layout pageTitle='Le Jeu du Pendu'>
      <Container>
        <Animation>
          {animation}
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
                onClick={() => handleKeyClick(letter)}
                $isActive
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
