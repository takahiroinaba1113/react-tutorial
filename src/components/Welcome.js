import React, { component } from 'react'

class Welcome extends React.Component{ 
    render (){

    // if you are using class components,
    // you need to use "this" keyword
    return <h1>Welcome {this.props.name}</h1>
    }
}

export default Welcome