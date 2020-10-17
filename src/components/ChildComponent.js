import React from 'react'

function ChildComponent (props) {

        return (
            <div>
                {/* method as props in ChildComponent */}
                {/* to pass params from child to parent, give the function args */}
                <button onClick={() => props.greetHandler('greetHandler in child is called')}>button in child component</button>
            </div>
        )
}

export default ChildComponent