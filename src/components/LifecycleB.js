import React from 'react'

class LifecycleB extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name: 'hoge'
        }

        console.log('lifecycle B: Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycle B: getDerivedStataeFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycle B: componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle B: shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle B: getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle B: componentDidUpdate')
    }

    render () {
        console.log('lifecycle B: render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifecycleB