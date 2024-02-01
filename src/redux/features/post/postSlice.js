import {createSlice} from "@reduxjs/toolkit" 
import axios from "axios"


const initialState = {
    loading: false,
    posts: [],
    data: [],
    error: null
}

const postSlice = createSlice({
    name: "post",
    initialState: initialState, 
    reducers: {
       postApiStarted: state => {state.loading = true},   
       postApiSuccess: (state, action) => {
              state.loading = false,
              state.posts = action.payload ,
              state.error = null    
        },
        postApiFailure: (state, action) => {
            state.loading = false,
            state.posts = [],
            state.error = action.payload
        }
    }
})

const {postApiStarted, postApiSuccess, postApiFailure} = postSlice.actions 

export function fetchPosts() {
    return async (dispatch)=>{
        dispatch(postApiStarted())
        try{
            const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            dispatch(postApiSuccess(response.data))
        }
        catch(error){
            dispatch(postApiFailure(error.message))
        }
    }
}
  





export default postSlice.reducer