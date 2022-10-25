//Creating this new shared card component so can feed in any data and it will displayed
//with the rating and description and avaialble to all other components

//FeedbackItem.jsx currently uses className card to achieve this so want to go
//there and modify it to import Card.

//Use backticks in className below to create a conditional class
//- card css is applied then check if we should reverse it
// by using interperolation if - if reverse is true then apply class reverse.
// this is the same as <div className = {card reverse}

import React from 'react'

import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    //conditional class
   // <div className={`card ${reverse && 'reverse'}`}>{children}</div>

   //can use conditional style as well to achieve same effect
    <div className='card' style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
    }}>{children}</div>
  )
}

//Instead of defining on feedbackitem.jsx can set default value here.
//reverse : true or reverse : false to show dark or white
Card.defaultProps = {
    reverse : true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
}

export default Card