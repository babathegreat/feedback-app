
//Structure - based on imports...
//App.js
//  Header.jsx
//  FeedbackData.js
//  FeedbackList.jsx
//      FeedbackItem.jsx
//          Card.jsx
//  FeedbackStats.jsx
//  FeedbackForm.jsx
//      RatingSelect.jsx
//      Button.jsx
//      Card.jsx

import React from 'react'
//Need to import each jsx file we make into the App.js
import Header from "./components/Header"

//This brings in just one item - want the whole list so don't use
//import FeedbackItem from "./components/FeedbackItem"

//for every new component we need to import it here

import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

//Pass global state down to components so need this
import {useState} from 'react'

//Import the UUID component to generate unique ids for our feedback
import { v4 as uuidv4 } from 'uuid';

function App () {

    //Note here FeedbackData is in () to get the data out of the array.
    //if use ({}) will get the object not the data.
    //feedback is the object containing the data in FeedbackData - so we can use this
    //object later to access it. We use setFeedback to change the data of the object.

    //Whenever the feedback object changes it can change everywhere it is referenced so
    //makes it easy to make changes throughout

    const [feedback, setFeedback] = useState(FeedbackData);
    
    //Use the newFeedback that we gathered off the feedback form...
    const addFeedback = (newFeedback) => {
        //Add a UUID to newFeedback
        newFeedback.id = uuidv4();

        //test to see what the value is
        //console.log(newFeedback);

        //Use setFeedback to add newFeedback to the existing feedback
        //have to use as an array with spread operator
        setFeedback([newFeedback,...feedback]);
    }

    //Add this new function so that when onclick is pushed to delete that it is passed from 
    //the bottommost component (FeedbackItem.jsx) up to App.js otherwise it doesn't know what
    //happened down below.

    //want this right here because it's where we can call setFeedback to change the data array
    //we cant call setFeedback in other components so have to do here.
    const deleteFeedback = (id) => {
        //just to check this works
        //console.log('App', id)

        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return(
        <>
            {/* JSX comment needs curly brackets - Can set the prop text for this value 
            <Header text='Hello World Destructured'/> */}

            {/* Added color props to the header below. Can set direct like below if not uses default props in header.jsx*/}
            {/* <Header bgColor='red' textColor='blue' /> */}
            
            <Header />
            <div className ='container'>
                {/* Bring Feedbackitem into the jsx here. This displays one item <FeedbackItem /> */}
                {/* But we want to show more than 1 item so use FeedbackList instead */}

                    {/* Here need to pass in feedback as a prop from our useState in the App */}
                    {/* Next added handleDelete and called the function deleteFeedback which we define above */}
                
                {/* Create new function to add feedback in the feedbackform.
                When do this need to add back to FeedbackForm function on FeedbackForm.jsx
                as a prop*/}
                <FeedbackForm handleAdd={addFeedback}/>

                {/*Add feedbacksats to render and pass in as a prop the entire feedback array*/}
                <FeedbackStats feedback={feedback}/>

                {/*Add feedbacklist to render and pass in as a prop the entire feedback array and the handledelete prop*/}
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            
            </div>
        </>
    )
}


export default App
