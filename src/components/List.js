import React from 'react'
import Person from './Person'

function List(){
    
    // example with simple array
    const names = ['name1', 'name2', 'name3', 'name3'];
    
    // map method receives callback function
    // by assigning map() method to a variable, it will look much simpler in JSX
    const nameList = names.map(name => <h2>{name}</h2>);

    // example for idnex as key
    // mapping to create a element for each value
    // note that this array does not have a key
    // passing index as another arg for a key prop
    const nameList2 = names.map((name, index) => <h2 key={index}>{index}: {name}</h2>)


    // example with array of object {}
    const persons = [
        {
            id: 1,
            name: 'obj1',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'obj2',
            age: 30,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'obj3',
            age: 40,
            skill: 'Spring'
        },
        {
            id: 4,
            name: 'obj4',
            age: 50,
            skill: 'Angular'
        }
    ];

    // each child in a list should have a key prop 
    // this key prop is for React to render efficiently, not for you to use it in child component
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {/* map() method is JavaScript so if you embed it in JSX, you need {}  */}
            {personList}

            {/* example for index as key */}
            {nameList2}
        </div>
    )
}

export default List