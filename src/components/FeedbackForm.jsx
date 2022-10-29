import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('');

  //Addedd thse 2 new states so can disable and enable the submit button
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');


  const handleTextChange = (e) => {
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
        </form>
    </Card>
  )
}

export default FeedbackForm