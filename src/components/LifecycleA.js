import React from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name: 'hoge'
        }

        console.log('lifecycle A: Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycle A: getDerivedStataeFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycle A: componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A: shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A: getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle A: componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: "update"
        })
    }

    render () {
        console.log('lifecycle A: render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA