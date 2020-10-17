import React from 'react'
import { render } from 'react-dom'

const Greet = (props) => {
    console.log(props)

    // Destructuring props in functional components, 
    // taking specified params out of props
    const {name, akaName} = props
    
    // when passing JavaScript code in JSX, you need to pass values with {}
    // since this is functional, you dont need to use 'this' keyword
    return (
    <div>
        <h1>
            Hello, {name} a.k.a {akaName}
        </h1>
    </div>
    )}

// exporting allows to import in other files
export default Greet
