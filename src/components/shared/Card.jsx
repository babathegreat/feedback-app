//Creating this new shared card component so can feed in any data and it will displayed
//with the rating and description and avaialble to all other components

//FeedbackItem.jsx currently uses className card to achieve this so want to go
//there and modify it to import Card.

//Use backticks in className below to create a conditional class
//- card css is applied then check if we should reverse it
// by using interperolation if - if reverse is true then apply class reverse.
// this is the same as <div className = {card reverse}

import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card