import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        if(description && imageLink) {

        }
    }


    render() {
        return (
            <div>
                <h1> Photowall </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button className="button">Post</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddPhoto