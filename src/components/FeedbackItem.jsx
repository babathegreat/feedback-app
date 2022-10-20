//Shows single feedback item, including rating and text

//Use short cut rfce to bring scaffolding in
import React from 'react'

function FeedbackItem() {
  return (
    //className is being used to style from pre-defined css names...
    <div className='card'>
        <div className='num-display'>10</div>
        <div className='text-display'>This is an example of a feedback item</div>
    </div>
  )
}

export default FeedbackItem