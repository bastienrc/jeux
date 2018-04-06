// Clavier du jeux
// 26 lettres en deux ranger
// Griser et désactiver quand utiliser
//
import React from 'react';
import './Keyboard.css';
import PropTypes from 'prop-types'

const Keyboard = ({ keys }) => (
  <div className="keyboard">
    {
      keys.map(({ id, letter, actived }) => (
        <span key={id} className={actived ? "actived" : "desactived"}>{letter}</span>
      ))
    }
  </div>
)

Keyboard.propTypes = {
  keys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      letter: PropTypes.string.isRequired,
      actived: PropTypes.bool.isRequired
    })
  )
}

export default Keyboard;

// Tableau par default
export const DEFAULT_KEYBOARD = [
  { id:  1, letter: "a", actived: true },
  { id:  2, letter: "b", actived: true },
  { id:  3, letter: "c", actived: false },
  { id:  4, letter: "d", actived: true },
  { id:  5, letter: "e", actived: true },
  { id:  6, letter: "f", actived: true },
  { id:  7, letter: "g", actived: true },
  { id:  8, letter: "h", actived: true },
  { id:  9, letter: "i", actived: true },
  { id: 10, letter: "j", actived: true },
  { id: 11, letter: "k", actived: true },
  { id: 12, letter: "l", actived: false },
  { id: 13, letter: "m", actived: true },
  { id: 14, letter: "n", actived: true },
  { id: 15, letter: "o", actived: true },
  { id: 16, letter: "p", actived: false },
  { id: 17, letter: "q", actived: true },
  { id: 18, letter: "r", actived: true },
  { id: 19, letter: "s", actived: true },
  { id: 20, letter: "t", actived: false },
  { id: 21, letter: "u", actived: true },
  { id: 22, letter: "v", actived: true },
  { id: 23, letter: "w", actived: false },
  { id: 24, letter: "x", actived: true },
  { id: 25, letter: "y", actived: false },
  { id: 26, letter: "z", actived: false }
];
