import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

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

class Main extends Component {

    render() {
        return
        <div>
            <List/>
            <Title/>
        </div>
    }
}

//CreateElement
ReactDOM.render(<Main/>, document.getElementById('root'));