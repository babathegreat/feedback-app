import React from 'react'


function FeedbackStats({feedback}) {
    //Calculate Ratings average. Using reduce to add prev and curr of array. Need
    //to put curr.rating - that's how to access it. prev.rating doesn't work.
    //Also need to put the starting array index of 0 otherwise doesn't work.

let average = feedback.reduce((prev, curr)=> prev + curr.rating, 0) / feedback.length;

  return (
    <div className='feedback-stats'>

        <h4> {feedback.length} Reviews </h4>  

        {/* Use isNan - is not a number to get rid of showing NaN */}
        <h4> Average Rating: {isNaN(average) ? 0 : average} </h4>
        
    </div>
  )
}

export default FeedbackStats