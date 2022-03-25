import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    populate( state, action ) {
      return action.payload
    },
    postAdded(state, action) {
      state.push({...action.payload });
    },
    postRemoved(state, action) {
      const index = state.findIndex((r) => r.id === action.payload);
      state.splice(index, 1);
    },
    postUpvote(state, action){
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            votes: post.votes + 1,
          };
        } else {
          return post;
        }
      })
    },
    postDownvote(state, action){
      return state.map((post) => {
        if (post.id === action.payload.id && post.votes > 0) {
          return {
            ...post,
            votes: post.votes - 1,
          };
        } else {
          return post;
        }
    })
  },
}});

export const { populate, postAdded, postRemoved, postUpvote, postDownvote } = postSlice.actions;

export default postSlice.reducer;