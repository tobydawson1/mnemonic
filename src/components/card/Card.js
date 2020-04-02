import React from 'react'
import PropTypes from 'prop-types'

import'./style.css';

export default function Card({ 
  handleClick,
  id,
  flipped,
  solved,
  type,
  height, 
  width,
  disabled
}){
  return (<div 
  className={`flip-container ${flipped ? 'flipped' : ''} `}
  style={{
    width, 
    height,
  }}
  onClick = {()=> disabled ? null : handleClick(id)}
  >
    <div className='flipper'>
      <img alt=""
      style={{
        height, width
      }}
      className={flipped ? 'front': 'back'}
      src={flipped || solved ? `/card_set/${type}.svg` : `/card_set/back.svg`}
      />
     </div>  
  </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,

}