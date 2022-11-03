//import React from 'react'
import PropTypes from 'prop-types'

// added props to pass in from the App.js file - bgColor & textColor using destructuring
// doesn't change until use them inside header...
function Header({text, description, bgColor, textColor}) {

    //can use a constant to hold the styles. Otherwise can stick inline but need to use double curly brackets
    // style={{backgroundColor: 'blue',color: 'red'}}

    const headerStyles = {
        //Now using the passed in props to do the colors...
        backgroundColor: bgColor,
        color: textColor

        //Previous hard coded the colors...
        //backgroundColor: 'blue',
        //color: 'red'
    }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
            
            <h2>{description}</h2>
            
        </div>

    </header>
   
  )
}

// I had this in the App.js file not in the Header.js file so it was throwing errors. 
// It sets the props for the Header file so should be with the Header file.

//The default props are used if no props are explicitly defined in App.js
Header.defaultProps = {
    text: 'Feedback Interface Test',
    description: 'This is a test page, done in React',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

//This adds prop type checking to make sure don't assign the wrong type to a prop.
Header.propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string

}

export default Header