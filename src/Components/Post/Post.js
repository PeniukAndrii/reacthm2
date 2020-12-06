import React, {Component} from 'react';

class Post extends Component {
    render() {
    let {item, findPost, chose}=this.props
    return (
            <div>
                {item.id}{item.title}
                {
                    ! chose && <button onClick={()=>findPost(item.id)}>Chose</button>
                }
            </div>
        );
    }
}

export default Post;
