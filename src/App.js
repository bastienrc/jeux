import React, { Component } from 'react';
import './App.css';

import Keyboard from './Keyboard';

const keys = [
  { id:  1, letter: "a", used: true },
  { id:  2, letter: "b", used: true },
  { id:  3, letter: "c", used: true },
  { id:  4, letter: "d", used: true },
  { id:  5, letter: "e", used: true },
  { id:  6, letter: "f", used: true },
  { id:  7, letter: "g", used: true },
  { id:  8, letter: "h", used: true },
  { id:  9, letter: "i", used: true },
  { id: 10, letter: "j", used: true },
  { id: 11, letter: "k", used: true },
  { id: 12, letter: "l", used: false },
  { id: 13, letter: "m", used: true },
  { id: 14, letter: "n", used: true },
  { id: 15, letter: "o", used: true },
  { id: 16, letter: "p", used: false },
  { id: 17, letter: "q", used: true },
  { id: 18, letter: "r", used: true },
  { id: 19, letter: "s", used: true },
  { id: 20, letter: "t", used: false },
  { id: 21, letter: "u", used: true },
  { id: 22, letter: "v", used: true },
  { id: 23, letter: "w", used: false },
  { id: 24, letter: "x", used: true },
  { id: 25, letter: "y", used: false },
  { id: 26, letter: "z", used: false }
];

class App extends Component {
  state = {
    keys,
    phrase: "constitutions",
    usedLetters: new Set("a","r","j"),
    score: 69
  }

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
  }

  handleKeyClick = letter => {
    const { usedLetters } = this.state
    usedLetters.add(letter)
    this.setState({ usedLetters })
    //return console.log(letter)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Le Jeux du Pendu</h1>
        </header>
        <div className="App-screen">
          <p className="App-score">Nombre de tentative : {this.state.score}</p>
          <p className="App-wordSearch">{this.computeDisplay(this.state.phrase, this.state.usedLetters)}</p>
        </div>
        <Keyboard keys={this.state.keys} onClick={this.handleKeyClick}/>
      </div>
    );
  }
}

export default App;
