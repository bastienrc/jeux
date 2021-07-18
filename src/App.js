import React, { Component } from 'react'
// import styled from 'styled-components'
import './App.css'
import Keyboard from './components/Keyboard'

import data from './data.json'
// const words = data.fruits
const words = ['pomme', 'fraise', 'orange', 'banane', 'clementine', 'kiwi']
console.log(data[10].name)

class App extends Component {
  constructor () {
    super()
    this.state = {
      keys: [
        'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'w', 'x', 'c', 'v', 'b', 'n'
      ],
      word: this.wordRandom(words),
      usedLetters: new Set(),
      score: 0
    }
  }

  wordRandom (words) {
    const min = Math.ceil(0)
    const max = Math.floor(words.length - 1)
    const nbRandom = Math.floor(Math.random() * (max - min + 1)) + min
    return words[nbRandom]
  }

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay (word, usedLetters) {
    return word.replace(
      /\w/g,
      letter => (usedLetters.has(letter) ? letter : '_')
    )
  }

  handleKeyClick (letter) {
    // Gestion des lettres utilisées
    const { usedLetters } = this.state
    usedLetters.add(letter)
    this.setState({ usedLetters })

    // Gestion du score
    this.setState({ score: this.state.score + 1 })

    // Message de Victoire
    const myWord = new Set(this.state.word)
    if (new Set([...myWord].filter(x => !usedLetters.has(x))).size === 0) {
      alert('Victoire en ' + this.state.score + ' tentatives')
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Le Jeu du Pendu</h1>
        </header>
        <div className='App-screen'>
          <p className='App-score'>
            Nombre de tentative(s) : {this.state.score}
          </p>
          <p className='App-wordSearch'>
            {this.computeDisplay(this.state.word, this.state.usedLetters)}
          </p>
        </div>
        <Keyboard
          keys={this.state.keys}
          usedLetters={this.state.usedLetters}
          onClick={this.handleKeyClick}
        />
      </div>
    )
  }
}

export default App
