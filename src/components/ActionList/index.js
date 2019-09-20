import React from "react";

const ActionList = props => {
    return (
        <div className='form-div'>
            <table>
                <tbody>
                    <tr>
                        <th>Actions</th>
                    </tr>
                
                    {props.actions.map(action => 
                        <tr key={action}>
                            <td>{action}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <form onSubmit={props.addAction}>
                <div>
                    <input
                        value={props.newAction}
                        onChange={props.handleActionChange}
                    />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default ActionList;
