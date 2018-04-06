import React, { Component } from 'react';
import './App.css';

import Keyboard, { DEFAULT_KEYBOARD } from './Keyboard';

class App extends Component {

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
  }

  tabTest() {
    return new Set(["a","e","t","o","n"]);
  }

  score() {
    return 69;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Le Jeux du Pendu</h1>
        </header>
        <div className="App-screen">
          <p className="App-score">Nombre de tentative : {this.score()}</p>
          <p className="App-wordSearch">{this.computeDisplay("constitution", this.tabTest())}</p>
        </div>
        <Keyboard keys={DEFAULT_KEYBOARD} />
      </div>
    );
  }
}

export default App;
