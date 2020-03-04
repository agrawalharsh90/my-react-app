import React from 'react';

function Card(props: { title:string}) {
    return <div>
        <h1> {props.title}</h1>
        <h3> Welcome to my card</h3>
    </div>
}

export default Card;