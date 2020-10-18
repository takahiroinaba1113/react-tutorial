import React, { Component } from 'react'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    // event contains all the info from inputs
    handlerUsernameChange = (event) => {
        this.setState({
            // event.target.value to extract value from the input embed in 'event'
            // 1. get the value inputed with 'event.target.value' -> value contains the input 
            // 2. assign it to 'username'
            // 3. set the state with setState method
            // 4. when the new value (event.target.value) is set, it will render again
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Submit with alert: ${this.state.username} ${this.state.comments} ${this.state.topic}`)
        
        // this method prevents inputed values to be cleared
        // after the submittion of values 
        event.preventDefault()
    } 

    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                <div>
                    <label>UserName</label>
                    <input 
                        type='text' 
                        value={this.state.username} 
                        onChange={this.handlerUsernameChange}
                    />
                </div>
                
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.handleCommentsChange}
                        />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>

            </form>

        )
    }
}

export default Form