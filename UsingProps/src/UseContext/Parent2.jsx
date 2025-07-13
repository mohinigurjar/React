// Parent.js
//
import React, { createContext } from 'react';
import Child1 from './Child1';

const name = createContext();
const surname = createContext();
function Parent2() {
    const myName = "Mohini";
    const mySurname = "Gurjar";
    return (
        <>
            <name.Provider value={myName}>
                <surname.Provider value={mySurname}>
                <Child1/>
                </surname.Provider>
            </name.Provider>
        </>
    )
    
}

export default Parent2;
export { name, surname };
