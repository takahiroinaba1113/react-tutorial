import React from 'react'
import { render } from 'react-dom'

const Greet = (props) => {
console.log(props)

// when passing JavaScript code in JSX, you need to pass values with {}
// since this is functional, you dont need to use 'this' keyword
return <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
}

// exporting allows to import in other files
export default Greet
