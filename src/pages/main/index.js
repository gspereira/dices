import React, { Component } from 'react';
import AddListForm from '../../components/addListForm';
import Dices from '../../components/dices';

export default class Main extends Component{
    render(){
        return (
            <div className="WRAPPER">
                <Dices />
                <AddListForm />
            </div>
        );
    };
}