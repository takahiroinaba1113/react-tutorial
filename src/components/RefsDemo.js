import React from 'react'

class RefsDemo extends React.Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        
        
        this.callBackRef = null
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        }

        this.clickHandler = this.clickHandler.bind(this)
    }


    componentDidMount(){

        // focus() gives a visitor to focus on the input right after the access
        // -> ボックスが選択された状態になる
        this.inputRef.current.focus()
        console.log(this.inputRef)

        if(this.callBackRef){
            this.callBackRef.focus()
        }
    }

    clickHandler(){
        alert(this.inputRef.current.value)
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCallBackRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo