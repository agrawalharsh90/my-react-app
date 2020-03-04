import React from 'react';
import './App.css';
import Card from "./Card";

function App() {
    const [count, setCout] = React.useState(0);
    return (
        <>
            <h1>My Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias animi aperiam consectetur incidunt
                molestiae quas quis, quo reprehenderit similique sit soluta tempora totam. Illum maiores minima
                molestiae mollitia voluptatem? <strong>{count}</strong></p>
            <button onClick={() => setCout(count + 1)}>click</button>
            <Card title={'Heeloo'}/>
            <Card title={'123'}/>
            <Card title={'HeeABC'}/>
            <Card title={'789'}/>
        </>

    );
}

export default App;
