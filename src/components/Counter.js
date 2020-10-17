import React from 'react'

class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment(){
        // you cant change state directly 
        // you technically can, but it does not triger rendering
        // this.state.count = this.state.count + 1
        // therefore, you need to use setState method to manipulate state value
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('collback value', this.state.count)
        // })

        // to update state based on the previous state,
        // maek sure to pass the previous state in the function 
        // and use that state in the logic
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)
        // this is called before setState method is executed (asynchronous)
        // console.log(this.state.count)
    }

    incrementFive(){
        // all five calls are done in one call
        // updating value does not carry over between calls
        this.increment()
        this.increment()
        this.increment()
        this.increment()   
        this.increment()
    }

    render(){
        return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Incremenet</button>
        </div>
        )
    }
}

export default Counter