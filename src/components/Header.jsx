//import React from 'react'
import PropTypes from 'prop-types'

// added props to pass in from the App.js file - bgColor & textColor using destructuring
// doesn't change until use them inside header...
function Header({text, bgColor, textColor}) {

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
        </div>

    </header>
   
  )
}

// This is outside of jsx - regular javascript - sets the default props for header on the 
// App.js file text to Feedback UI

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header