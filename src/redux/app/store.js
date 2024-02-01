import { configureStore } from "@reduxjs/toolkit"; 
// import postReducer from "../features/post/postSlice"; 
import postReducer2 from "../features/post/postSlice2";

const store = configureStore({
    reducer: {
        post: postReducer2
    }
})

export default store