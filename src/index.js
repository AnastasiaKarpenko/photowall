import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'shovel the driveway', 'walk the dog'];

const element = React.createElement('ol', null,
    tasks.map((task) => React.createElement('li', {key: task}, task))

);

ReactDOM.render(element, document.getElementById('root'));