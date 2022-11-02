import React from 'react'

//Need to import the FeedbackItem Component as we use it below in our jsx.
import FeedbackItem from './FeedbackItem'

import PropTypes from 'prop-types'

//Import in framer-motion components to animate
import {motion, AnimatePresence} from 'framer-motion'

//pass in the {feedback} prop that we passed in the App.jsx in FeedbackList.
function FeedbackList({feedback, handleDelete}) {
  
    //can do a console log to see what it's in the object
    //console.log(feedback)

    //want to check if there is any feedback or if it's empty if so say no feedback
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    //This is the return with the animation
    return (
        
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                >
                    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                </motion.div>
            ))}
             </AnimatePresence>
        </div>
       
    )


    //This is the return without the animation
    // return (
    // <div className='feedback-list'>
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

    //    {feedback.map((item)=>(
    //            <div>
    //                <FeedbackItem 
    //                    key={item.id} 
    //                    item={item} 

                        //this is now a prop of FeedbackItem so should add it to FeedbackItem.jsx 
                        //function call definition right at the top of the file.
                        //handleDelete={(id) => console.log(id)} />

                        //So now want to pass the handleDelete prop up one more level to App.js
                        //define it below and pass it up above.
    //                    handleDelete={handleDelete} />
    //            </div>
    //        )
    //    )}
    //</div>
    
  //)
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList