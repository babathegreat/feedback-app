import React from 'react'
import PropTypes from 'prop-types'

//prop children because will wrap text inside button.

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

//Set some dedfault props for the button values
//
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}

export default Button