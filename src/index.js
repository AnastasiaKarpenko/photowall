import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('ol', null,
    React.createElement('li', null, 'Take out the trash'),
    React.createElement('li', null, 'shovel the driveway'),
    React.createElement('li', null, 'walk the dog')
    );

ReactDOM.render(element, document.getElementById('root'));