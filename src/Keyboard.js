// Clavier du jeux
// 26 lettres en deux ranger
// Griser quand utiliser
//
import React from 'react'
import './Keyboard.css'
import PropTypes from 'prop-types'

const Keyboard = ({ keys, usedLetters, onClick }) => (
  <div className="keyboard">
    {keys.map(letter => (
      <span
        key={letter}
        className={usedLetters.has(letter) ? 'key used' : 'key'}
        onClick={() => onClick(letter)}
      >
        {letter}
      </span>
    ))}
  </div>
)

Keyboard.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Keyboard
