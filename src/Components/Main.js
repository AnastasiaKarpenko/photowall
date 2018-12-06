import React, {Component} from 'react'
import Title from './Title'
import List from './List'


class Main extends Component {
    render() {
        return <div>
            <Title title={"ToDo"}/>
            <List tasks={["Mow the lawn", "Walk the dog"]}/>
            <List tasks={["Hose the driveway", "Do the laundry"]}/>
        </div>
    }
}

export default Main