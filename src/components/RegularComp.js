import React from 'react'

class RegularComp extends React.Component{
    render(){

        console.log("Regular Component Render")

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp