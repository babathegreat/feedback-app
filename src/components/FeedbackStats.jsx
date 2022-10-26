import React from 'react'
import PropTypes from 'prop-types'


function FeedbackStats({feedback}) {
    //Calculate Ratings average. Using reduce to add prev and curr of array. Need
    //to put curr.rating - that's how to access it. prev.rating doesn't work.
    //Also need to put the starting array index of 0 otherwise doesn't work.

let average = feedback.reduce((prev, curr)=> prev + curr.rating, 0) / feedback.length;

//Set to only 1 decimal place if 0 then replace that with nothing
average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>

        <h4> {feedback.length} Reviews </h4>  

        {/* Use isNan - is not a number to get rid of showing NaN */}
        <h4> Average Rating: {isNaN(average) ? 0 : average} </h4>
        
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats