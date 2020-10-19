import React from 'react'
import FRInput from './FRInput'

class FRParentInput extends React.Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        // current points the native input element
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                {/* attach the inputRef to the child component instance */}
                {/* this ref is forwarded to the child component of ref */}
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput