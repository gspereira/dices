import React from 'react';

const PlacesList = (props) => {
    return (
        <div className='form-div'>
            <table>
                <tbody>
                    <tr>
                        <th>Places</th>
                    </tr>
                
                    {props.places.map(place => 
                        <tr key={place}>
                            <td>{place}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <form onSubmit={props.addPlace}>
                <div>
                    <input value={props.newPlace} onChange={props.handlePlaceChange}/>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default PlacesList;