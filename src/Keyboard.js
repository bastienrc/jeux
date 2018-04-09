// Clavier du jeux
// 26 lettres en deux ranger
// Griser et désactiver quand utiliser
//
import React from 'react';
import './Keyboard.css';
import PropTypes from 'prop-types'

const Keyboard = ({ keys, onClick }) => (
  <div className="keyboard">
    {
      keys.map(({ id, letter, used }) => (
        <span key={id} className={used ? "key used" : "key"} onClick={() => onClick(letter)} >{letter}</span>
      ))
    }
  </div>
)

Keyboard.propTypes = {
  keys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      letter: PropTypes.string.isRequired,
      used: PropTypes.bool.isRequired
    })
  )
}

export default Keyboard;
