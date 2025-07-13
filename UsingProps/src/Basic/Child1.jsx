// Child1.jsx

import react from 'react';
import Parent from './Parent';
import Child2 from './Child2';

function Child1({name}) {
    return (
        <Child2 name={name} />
    )
}

export default Child1