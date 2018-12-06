import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'shovel the driveway', 'walk the dog'];

const element = <ol>
    {tasks.map((task) => <li>{task} </li>)}
</ol>

ReactDOM.render(element, document.getElementById('root'));