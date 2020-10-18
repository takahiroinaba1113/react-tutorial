import React from 'react'
import './myStyle.css'

// example for typical styling with css and class 
function StyleSheet(props){
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheet Example</h1>
        </div>
    )
}

export default StyleSheet