import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./components/PostSlice";
import repliesReducer from "./components/ReplySlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    replies: repliesReducer,
  },
});

export default store;