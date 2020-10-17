import React from 'react'

class Message extends React.Component {
    
    constructor(){
        super()
        this.state = {
            message: "welcome visitor"
        }
    }
    
    // to change state, you need to use setState method
    changeMessage(){
        this.setState({
            message: "thank you for subscribing"
        })
    }

    // render method that class has to have
    // render to return JSX 
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message