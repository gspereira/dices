import React, { Component } from 'react';
import Link from 'react';

import './styles.css';

export default class Main extends Component{
    state = {
        part: null,
        action: null,
    };

    componentDidMount(){
        this.rollDices();
    }

    random(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    rollDices = async => {
        const parts = [
            'Room',
            'Bathroom',
            'Living Room',
            'Garden',
            'Roof',
            'Kitchen',
            'Abu Dhabi',
        ];
        const actions = [
            'Jump',
            'Run',
            'Shout',
            'Roll',
            'Scream',
            'Drink',
            'Kill',
            'Dance'
        ];

        this.setState({
            part: this.random(parts),
            action: this.random(actions),
        });
    };

    render(){
        const {part, action} = this.state;
        return (
            <div className="main">
                <div className="partsDice">
                    <strong>{action}</strong>
                </div>
                <div className="actionsDice">
                    <strong>{part}</strong>
                </div>

                <div className="rollButton">
                    <button onClick={this.rollDices}> Roll </button>
                </div>
            </div>
        );
    };
}