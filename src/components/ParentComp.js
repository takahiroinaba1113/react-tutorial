import React from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends React.Component{

constructor(props){
    super(props)

    this.state = {
        name: 'name here'
    }
}

componentDidMount(){
    setInterval(() => {
        this.setState({
            name: 'name after didmount'
        })
    }, 2000)
}

    render(){

        console.log("*****Parent Component Render******")

        return(
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp