import React,{useEffect} from "react"; 
import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../redux/features/post/postSlice";
import { fetchPosts2 } from "../redux/features/post/postSlice2";

const Post = () => {
    const {posts, loading, error} = useSelector(state => state.post)
    console.log(posts)

    const dispatch = useDispatch() 

    // dispatch => is a function  , address or reference

    useEffect(()=>{
        // dispatch(fetchPosts)
        dispatch(fetchPosts2())
    },[])

    return(
        <div>
            <h1> Post </h1>
            {
                posts.length>0 && (
                        posts.map(post => (
                            <div key={post.id}>
                                <h3> {post.title} </h3>
                                <p> {post.body} </p>
                                <hr/>
                            </div>
                        ))
                    
                )
            }
        </div>
    )
}

export default Post