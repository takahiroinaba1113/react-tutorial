import React from 'react'

const Hello = () => {
    return (
        <div>
            <h1>hello react JSX</h1>
        </div>
    )

    // react element without using JSX
    // return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, 'hello react'))
}

export default Hello