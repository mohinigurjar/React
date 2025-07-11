import React from 'react';
import Child1 from './Child1'
function Parent() {

    const name = "Mohini"; //name is created here but i wanna use it in the child 3
    return (
        <Child1 name={name} />

    )
}

export default Parent;