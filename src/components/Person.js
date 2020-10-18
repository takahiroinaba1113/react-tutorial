import React from 'react'

// receiving an object of 'person'
function Person({person}){
    return (
        <div>
             <h2>
                this is {person.name} and {person.age}. ID is {person.id}. Skill is {person.skill}
             </h2>   
        </div>
    )
}

export default Person