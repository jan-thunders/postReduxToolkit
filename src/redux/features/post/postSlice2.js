import {createSlice, createAsyncThunk} from "@reduxjs/toolkit" 
import axios from "axios"


const initialState = {
    loading: false,
    posts: [],
    error: null
}

export const fetchPosts2 = createAsyncThunk("post/fetchPosts" , 
    ()=>{
         return (
            axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            .then(res => res.data)  
            )
    }
)

// const fetchPosts3 = createAsyncThunk("post/fetchPosts" , 
//     async ()=>{
//         try{
//          const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json") 
//          return response.data   
//         }
//         catch(error){
//              throw new Error(error.message)
//         }
//     }
// )


// console.log(fetchPosts) 

// fetchPosts = {fulfiled, pending, rejected}

const {pending, fulfilled, rejected} = fetchPosts2

const postSlice2 = createSlice({
    name: "post2",
    initialState: initialState,
    reducers:{},
    extraReducers:  (builder)=>{
            builder.addCase(pending, (state)=>{state.loading = true})
            builder.addCase(fulfilled, (state, action)=>{
                state.loading = false
                state.posts = action.payload
                state.error = null
            })
            builder.addCase(rejected, (state, action)=>{
                state.loading = false
                state.posts = []
                state.error = action.payload // changes
            })
        }
    
})

// postSlice2.actions

// actions => pending

export default postSlice2.reducer




