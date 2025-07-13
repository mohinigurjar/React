//Child3.jsx

import React from 'react';
function Child3({name}) {
    return (
        <>
            <div>My name is {name}</div>
        </>
    )
}

export default Child3;

//So when the data is large that is we have a lot more props than it becomes complex and if we want to directly access the data of the parent in the required nested component we can use context api or usecontext hook