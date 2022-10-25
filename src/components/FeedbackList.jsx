import React from 'react'

//Need to import the FeedbackItem Component as we use it below in our jsx.
import FeedbackItem from './FeedbackItem'

import PropTypes from 'prop-types'

//pass in the {feedback} prop that we passed in the App.jsx in FeedbackList.
function FeedbackList({feedback}) {
  
    //can do a console log to see what it's in the object
    //console.log(feedback)

    //want to check if there is any feedback or if it's empty if so say no feedback
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }


    return (
    <div className='feedback-list'>
        {/* example of mapping just the item rating - shows just numbers. Note this
        uses the object brackets for that item vs below we use the imported component.

        {feedback.map((item)=> (
            <div>
                {item.rating}
            </div>
        )
        )} */}

        {/* Below we keep item which is the props passing the data for each item in the feedbacklist
        We also add attributes of key and item for each item*/}

        {feedback.map((item)=>(
                <div>
                    <FeedbackItem key={item.id} item={item}/>
                </div>
            )
        )}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayof(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList