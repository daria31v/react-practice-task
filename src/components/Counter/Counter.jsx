import React from 'react'
import './Counter.css'
import {Controls} from './Controls'
import { Value } from './Value'

export class Counter extends React.Component {

    static defaultProps = {
        initialValue:0,
    }
    static propTypes = {
        // 
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 5,
    //     };
    // }
    //bable change this code in constructor
    state = {
        value: this.props.initialValue,
    }

    // handleIncrement = event => {
    //     console.log('up 1 !');
    //     // console.log(this);
    //     // const {target} = event.target;
    //     // setTimeout (() => {
    //     //     console.log(target);
    //     // }, 1000);
        
    // }
    // handleDecrement = event => { 
    //     console.log('down 1 !');
    //     // console.log(this);
    //     // console.log(event)
    // }
    
    // handleIncrement = () => {
    //     this.setState({
    //         value: 10,
    //     });
    // }
    // (31-35) используем для единичной перезаписи значения
    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 5,
        }));
    }
    handleDecrement = event => {
           this.setState(prevState => ({
            value: prevState.value - 5,
        }));
}
    render() {
        const { value } = this.state;
        return (
            <div className="Counter">
            <Value value={value}/>
            <Controls 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            />
            </div>
        )
    }
}

// onСобытие

