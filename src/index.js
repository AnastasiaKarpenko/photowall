import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element = <ol>
    {tasks.map((task) => <li key = {task}>{task}</li>)}
</ol>

ReactDOM.render(element, document.getElementById('root'));