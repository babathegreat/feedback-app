//Shows single feedback item, including rating and text

//Use short cut rfce to bring scaffolding in
import React from 'react'

//Hooks begin with ..use..
import { useState } from 'react'

function FeedbackItem() {

    //useState to hold data in the component's state instead of hardcoding it.

    //the first part 'rating' is the variable name
    //the second part 'setRating' is a function used to update the rating
    //the right side is iniital value - 7
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('This is a good example of a feedback item');

    //This creates the variable handleClick which is function calling setRating to change its value to 10.
    //const handleClick = () => {

        //Here can just set it to value 10
        //setRating(10);

        //Here can put a function inside setRating instead just return 10
        //setRating(()=>{
        //    return 10;
        //} );

        //Here can put a function inside calling prev value to manipulate by adding 1
        //whenver the click button is pressed.
        //setRating( (prev)=>{
        //    return prev + 1;
        //}

        //);
    //}

  return (
    //className is being used to style from pre-defined css names...
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{text}</div>

        {/* Adding a button that calls handleclick when pressed <button onClick={handleClick}>Click</button>*/}
        
    </div>
  )
}

export default FeedbackItem