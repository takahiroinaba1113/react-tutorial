import React from 'react'

class ClassClick extends React.Component{
    
    clickHandler(){
        console.log('class button clicked')
    }

    // in class methods can be accessed through 'this' keyword
    // for event attribute, you dont use () to use the function
    render () {
        return (
            <div>
                <button onClick={this.clickHandler}>Click class here</button>
            </div>
        )
    }
}

export default ClassClick 