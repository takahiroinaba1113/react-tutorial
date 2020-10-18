import React from 'react'

// example of styling with inline styiling 

// define an object used to style 
// note that keys have to be camelCase, instead of snake-case which is a standard in CSS
const heading = {
    fontSize: '72px',
    color: 'blue'
}

// apply the styling with 'style' attribute
function Inline(){
    return (
        <div>
            <h1 style={heading}>Inline styling</h1>
        </div>
    )
}

export default Inline