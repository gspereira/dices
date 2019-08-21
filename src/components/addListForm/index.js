import React, { Component } from 'react';

export default class AddListForm extends Component{
    createItem(e){
        e.preventDefault();
        var item = this.refs.itemName.value;
        if (typeof item === "string" && item.length > 0) {
            this.props.addItem(item);
            this.refs.itemForm.reset();
        }
    };
    render() {
        return (
            <form className="form-inline" ref="{formName}">
                <div className="form-group">
                    <input
                        type="text"
                        id="{this.props.formName}Item"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add {this.props.formName}
                </button>
            </form>
        );
    };
}