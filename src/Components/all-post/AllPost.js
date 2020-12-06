import React, {Component} from 'react';
import {AllService} from "../../Service/AllService";
import Post from "../Post/Post";
class AllPost extends Component {

    state={posts:[], chosenOne:null}
    AllService = new AllService()

    findPost=(id)=>{
        this.setState({chosenOne:this.AllService.getPostById(this.state.posts, id)})
    }

    componentDidMount(){
        this.AllService.getAllPost().then(value => this.setState({posts:value}))
    }

    render() {
        let {posts, chosenOne}=this.state
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} findPost={this.findPost}/>)
                }
                {
                    chosenOne && <Post item={chosenOne} chose={true}/>
                }
            </div>
        );
    }
}

export default AllPost;