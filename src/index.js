import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element =
    <div>
        <h1> Task List </h1>
        <ol>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>
    </div>

class List extends Component {

    render() {
        return (<ol>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>)
    }
}

class Title extends Component {
    render() {
        return (
            <h1>Task List</h1>
        );
    }
}



//CreateElement
ReactDOM.render(element, document.getElementById('root'));