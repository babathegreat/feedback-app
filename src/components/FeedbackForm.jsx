import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('');

  //Addedd thse 2 new states so can disable and enable the submit button
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  //Added rating so can manipulate the rating

  const[rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    //First check if the text is empty
    if ({text} === '') {
      setBtnDisabled(true);
      setMessage(null);

      //Second check if text <= 10 characters
    } else if((text !== '') && (text.length <= 10)) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters');

      //Last if >=10 characters then enable the submit button
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    
    //jsut keeps setting text to whatever is in the input box in realtime
    setText(e.target.value)
  }

  //create new function to handle the form submit
  const handleSubmit = (e) => {
    
    //Prevent default action
    e.preventDefault();

    //Check length one more time to be sure.
    if(text.length >=10) {
      const newFeedback = {
        text: text,
        rating: rating
      }

      console.log(newFeedback);
    }
  }


  return (
    <Card>
        <form onSubmit = {handleSubmit}>
            <h2>How would you rate us?</h2>

            {/* Put select rating component here 
            <RatingSelect />   Now want to pass what rating was selected up to
            we create a new prop called "select" then we need to pass that to 
            RatingSelect function on the RatingSelect.jsx as well
            
            This one shows console so can verify what is being outputted
            <RatingSelect select={(rating) => console.log(rating)}/>

            Below we want to set the rating to the rating from the Rating select
            in the feedbackform.jsx - this file - so that's why we setRating
            */}

            <RatingSelect select={(rating) => setRating(rating)} />

            <div className='input-group'>
                <input 
                    onChange={handleTextChange} 
                    type='text' 
                    placeholder='Write Something'
                    value={text}
                />

                <Button type='submit' isDisabled={btnDisabled}>
                    Submit
                </Button>
            </div>

        <div className='message'>{message}</div>
        {message && <div className='message'>{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm