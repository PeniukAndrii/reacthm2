import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, setPost, isShowBtn}=this.props
        return (
            <div>
                {item.id}{item.title}
                {
                    isShowBtn && <button onClick={()=>setPost(item.id)}>Chose</button>
                }
            </div>
        );
    }
}

export default Post;