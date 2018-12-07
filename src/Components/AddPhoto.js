import React, {Component} from 'react'

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h1> Photowall </h1>
                <form className="form">
                    <input type="text" placeholder="Link"/>
                    <input type="text" placeholder="Description"/>
                </form>
            </div>
        )
    }
}

export default AddPhoto