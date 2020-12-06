export class AllService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllPost(){
        return(fetch(this.url).then(value => value.json()).then(value => value))
    }

    getPostById(posts=[], id){
        return posts.find(value => value.id===id)
    }

}