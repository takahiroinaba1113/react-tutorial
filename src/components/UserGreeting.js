import React from 'react'

class UserGreeting extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }



    render () {

        // 1. if/else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             welcome true
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             welcome false
        //         </div>
        //     )
        // }

        // 2. element variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>true message</div>
        // } else{
        //     message = <div>false message</div>
        // }
        // return <div>{message}</div>

        // 3. ternary conditional operator
        // ternary operator == condition ? when true : when false
        return (
            this.state.isLoggedIn?
            <div>ternary conditional true</div>
            :
            <div>ternary conditional false</div>
        )

        // 4. short circuit operator
        // if the right side is evaluated true, the left side is evaluated
        // return this.state.isLoggedIn && <div>short circuit operator true</div>
    
        /* TRY STICK TO EITHER 3 OR 4 FOR SIMPLER CODES */
    }
}

export default UserGreeting