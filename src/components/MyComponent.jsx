import React from 'react';
import propTypes from 'prop-types';

class MyComponent extends React.Component{

    state = {
        clicked: 0
    }

    static defaultProps = {
        surname: "Leon"
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        return true
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Antiguo state" + this.state.clicked);
        console.log("Próximo state" + nextState.clicked);
        console.log("willUpdate");
    }
    componentDidUpdate(){
        console.log("didUpdate");
    }

    onclick = ()=>{
        this.setState({
            clicked: this.state.clicked +1
        })
    }
    render(){
        const { name, surname, age} = this.props;
        const { clicked } = this.state;
        return (
            <div>
                <div>Hi {name} {surname} you are {age} years old </div>
                <div>You have clicked {clicked} times</div>
                <button onClick={this.onclick}>Click me</button>
            </div>
            )
    }
}
MyComponent.propTypes = {
    name: propTypes.string.isRequired,
    surname: propTypes.string,
    age: propTypes.number.isRequired
}


export default MyComponent;