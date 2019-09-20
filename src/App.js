import React, { useState } from 'react';
import './App.css';
import PlacesList from './components/PlacesList';
import ActionList from './components/ActionList';
import Dices from './components/Dices';

function App() {
    const [ actions, setActions] = useState([]);
    const [ newAction, setNewAction] = useState("");
    const [ places, setPlaces ] = useState([]);
    const [ newPlace, setNewPlace ] = useState("");

    const handleActionChange = event => {
        setNewAction(event.target.value);
    }

    const handlePlaceChange = event => {
        setNewPlace(event.target.value);
    }

    const addAction = event => {
        event.preventDefault();
        if(actions.filter(action => action === newAction).length > 0) {
            alert(`Action ${newAction} already exists`);
        } else {
            const Action = newAction;
            setActions(actions.concat(Action));
        }
        setNewAction("");
    }

    const addPlace = event => {
        event.preventDefault();
        if(places.filter(place => place === newPlace).length > 0) {
            alert(`Place ${newPlace} already exists`);
        } else {
            const Place = newPlace;
            setPlaces(places.concat(Place));
        }
        setNewPlace("");
    }
    
    return (
        <div className='Wrapper'>
            <ActionList 
                handleActionChange={handleActionChange}
                newAction={newAction}
                addAction={addAction}
                actions={actions}
            />
            <PlacesList 
                handlePlaceChange={handlePlaceChange}
                newPlace={newPlace}
                addPlace={addPlace}
                places={places}
            />
            <Dices 
                actions={actions}
                places={places}
            />
        </div>
    );
}

export default App;
