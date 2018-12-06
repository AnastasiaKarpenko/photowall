import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"
            }, {
                id: "1",
                description: "Aliens?",
                imageLink: "https://static1.squarespace.com/static/53a7cd8fe4b09956480529e3/53a875e5e4b0ff78ff7bb855/53a8760ce4b0ff78ff7bbfb6/1403549337779/20100716_Yosemite_449_16x24.jpg?format=2500w"

            }, {
                id: "2",
                description: "On a vacation",
                imageLink: "https://welldesi.files.wordpress.com/2015/10/hanauma-bay.jpg?w=2400&h=1600&crop=1"

            }]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))

    }

    render() {
        return <div>
            <Title title={"Photowall"}/>
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>

        </div>
    }
}

export default Main