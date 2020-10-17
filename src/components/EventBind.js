import React from 'react'

class EventBind extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            message: "Event Binding"
        }
        
        // binding in class constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState = ({
    //         message: "EB"
    //     })
    // }

    // forth choice of binding: class property as arrow function
    clickHandler = () => {
        this.setState({
            message: "good bye"
        })
    }
    
    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                {/* first choice of binding: binding in rendering */}
                {/* you dont want to go for this one because of performance issues */}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind</button> */}
                
                {/* second choice of binding: arrow function binding in render */}
                {/* <button onClick={() => this.clickHandler()}>Event Bind</button> */}

                <button onClick={this.clickHandler}>Event Bind</button>

            </div>
        )
    }

}

export default EventBind