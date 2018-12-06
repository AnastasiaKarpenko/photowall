import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"
}, { id: "1",
    description: "Aliens?",
    imageLink: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"

}, { id: "2",
    description: "On a vacation",
    imageLink: "https://static1.squarespace.com/static/53a7cd8fe4b09956480529e3/53a875e5e4b0ff78ff7bb855/53a8760ce4b0ff78ff7bbfb6/1403549337779/20100716_Yosemite_449_16x24.jpg?format=2500w"

}]

class Main extends Component {
    render() {
        return <div>
            <Title title={"Photowall"}/>
            <PhotoWall/>

        </div>
    }
}

export default Main