import React, { component } from 'react'

class Welcome extends React.Component{ 
    render (){

    // Destructuring in class components
    // its almost the same as functional components,
    // just using this.props instaed of just props
    const {name, akaName} = this.props

    // state can also be destructured 
    // const {state1, state2} = this.state

    // if you are using class components,
    // you need to use "this" keyword
    return <h1>Welcome {name} aka {akaName}</h1>
    }
}

export default Welcome