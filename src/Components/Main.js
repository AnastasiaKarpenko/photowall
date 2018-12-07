import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"
            }, {
                id: 1,
                description: "Aliens?",
                imageLink: "https://static1.squarespace.com/static/53a7cd8fe4b09956480529e3/53a875e5e4b0ff78ff7bb855/53a8760ce4b0ff78ff7bbfb6/1403549337779/20100716_Yosemite_449_16x24.jpg?format=2500w"

            }, {
                id: 2,
                description: "On a vacation",
                imageLink: "https://welldesi.files.wordpress.com/2015/10/hanauma-bay.jpg?w=2400&h=1600&crop=1"

            }],
            screen: 'photos'
        }
    }


    removePhoto = (postRemoved) => {
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))

    }

    addPhoto = (postSubmitted) => {
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

        console.log(prevState.posts);
        console.log(this.state);

    }

    render() {
        console.log(this.state.posts);
        return <div>
            <Route exact path="/" render={() => (
                <div>
                    <Title title={"Photowall"}/>
                    <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}
                               onNavigate={this.navigate}/>
                </div>
            )}/>

            <Route path="/AddPhoto" render={({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push('/');
                }}/>
            )}/>
        </div>
    }
}


export default Main