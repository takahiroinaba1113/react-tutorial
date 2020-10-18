import React from 'react'

function Columns (){

    const items = []

    // Fragment lets you have no extra node (e.g. <div> tag) to React 
    return (
        // this can be <> and </>
        <React.Fragment>
            {
                // map can be used here
                items.map(item => (
                    // key is the only attribute that can be passed in Fragment
                    <React.Fragment key = {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Woohoo</td>
        </React.Fragment>
    )
}

export default Columns