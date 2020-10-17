import React from 'react'

function FunctionClick(){
    
    function clickHandler () {
        console.log('button clicked')
    }

    // for clickHanlder dont use () otherwise it gonna be a function call
    // you want it to be a function, not a function call
    // an event handler is a function, not a function call
    return (
        <div>
            <button onClick={clickHandler}>Click here</button>
        </div>
    )
}

export default FunctionClick