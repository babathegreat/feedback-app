
//Need to import each jsx file we make into the App.js
import Header from "./components/Header"

//This brings in just one item - want the whole list so don't use
//import FeedbackItem from "./components/FeedbackItem"

import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData";

//Pass global state down to components so need this
import {useState} from 'react'


function App () {

    //Note here FeedbackData is in () to get the data out of the array.
    //if use ({}) will get the object not the data.
    //feedback is the object containing the data in FeedbackData - so we can use this
    //object later to access it. We use setFeedback to change the data of the object.

    const [feedback, setFeedback] = useState(FeedbackData);

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
                <FeedbackList feedback={feedback}/>
            
            </div>
        </>
    )
}


export default App
