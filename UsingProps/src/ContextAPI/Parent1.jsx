// Parent.js
//using context api
//to avoid props drilling
//main points are - create, provider, consumer

import React, { createContext } from 'react';
import Child1 from './Child1'

//created a context named 'name'
const Name = createContext();
const Surname = createContext();

function Parent1() {
    const myName = 'Mohini';
    const mySurname = 'Gurjar';

    return (
        <Name.Provider value={myName}>
        <Surname.Provider value={mySurname}>
                <Child1 />
        </Surname.Provider>
        </Name.Provider>
        
    )
}

export default Parent1;
export { Name, Surname };


