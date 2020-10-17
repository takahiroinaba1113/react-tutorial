import React from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // receiving args from child component
    greetParent(childArgs){
        // parent literals here (ES6)
        alert(`hello ${this.state.parentName}: ${childArgs}`)
    }

    render(){
        return (
            <div>
                {/* passing this greetHandler function to ChildComponent in the 'greetHandler' props */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent