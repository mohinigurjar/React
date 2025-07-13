import React from 'react'
import { Name, Surname } from './Parent1'

// Child3.js
// we can only write functions inside consumers

function Child3() {
    return (
        <>
            <Name.Consumer>
                {(myName) => {
                    return (
                         /**consumer must always return a function */
                            <Surname.Consumer> 
                                {(mySurname) => {
                                    return (
                                        <div>
                                            Using contextAPI...
                                            Heloo Myself {myName} {mySurname}</div>
                                    )
                                }
                            } 
                            </Surname.Consumer>
                        )
                    }
                }
            </Name.Consumer>
        </>  
    ) 
}
export default Child3;