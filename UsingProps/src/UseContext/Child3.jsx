// Child3.js
import React, { useContext } from 'react';
import { name, surname } from './Parent2';


function Child3() {
    const myName = useContext(name);
    const mySurname = useContext(surname);
    return (
        <div>
            <p>UseContext hook...</p>
        hiiii....My name is {myName} {mySurname}
        </div>
    ) 
}

export default Child3
