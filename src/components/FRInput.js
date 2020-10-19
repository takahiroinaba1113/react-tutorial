import React from 'react'

// function FRInput () {
//     return (
//         <div>
//             <input type='text' /> 
//         </div>
//     )
// }

// this forwardRef method receives ref arg in the second,
// in the JSX, assign the ref received from the parent component to the ref in child component
const FRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            {/* attach ref to the native input element */}
            <input type='text' ref={ref}/>
        </div>
    )
})

export default FRInput