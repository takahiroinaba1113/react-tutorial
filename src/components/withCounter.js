import React from 'react'

// example of a higher order component
const withCounter = (wrappedComponent) => {
    class WithCounter extends React.Component{

        constructor(props){
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            // receive previous state 
            this.setState( prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            // passing props to the original component
            return (
                <wrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {... this.props}/>
                )
        }
    }
    return WithCounter
}

export default withCounter