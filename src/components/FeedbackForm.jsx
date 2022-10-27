import React from 'react'
import Card from './shared/Card'

function FeedbackForm() {
  return (
    <Card>
        <form>
            <h2>How would you rate us?</h2>

            <div className='input-group'>
                <input type='text' placeholder='Write Something'/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm