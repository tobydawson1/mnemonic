import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default function Card({ handleClick, id, flipped, back, front, height, width }) {
    return <div
        className={'flip-container ${number}'}
        style={{
            width, height
        }}
        onClick={() => handleClick(id)}
        >

        </div>
}
