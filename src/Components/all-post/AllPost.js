import React, {Component} from 'react';
import Post from "../Post/Post";

class AllPost extends Component {

    state = {post:[], chosenPost:null}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(post=>{
                this.setState({post})
            })
    }

    setPost=(id)=>{
        let {post}=this.state
        let find = post.find(value => value.id===id)
        this.setState({chosenPost: find})
    }

    render() {
        let {post, chosenPost} = this.state
        return (
            <div>
                {
                    post.map(value => <Post item={value} key={value.id} setPost={this.setPost} isShowBtn={true}/>)
                }
                {
                    chosenPost && <Post item={chosenPost} isShowBtn={false}/>
                }
            </div>
        );
    }
}

export default AllPost;