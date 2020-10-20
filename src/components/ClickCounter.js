import React from 'react'
import withCounter from './withCounter'

class ClickCounter extends React.Component{

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {

    //     // receive previous state 
    //     this.setState( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render(){
        // extract count from state
        // const { count } = this.state
        const { count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>Click {count} times</button>
        )
    }
}
// if you pass props to ClickCounter from App.js, it usually the wrapper that receives the props
export default withCounter(ClickCounter)