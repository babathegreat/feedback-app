import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('');

  //Addedd thse 2 new states so can disable and enable the submit button
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('Hello');


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

  return (
    <Card>
        <form>
            <h2>How would you rate us?</h2>

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