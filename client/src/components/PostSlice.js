import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    populate( state, action ) {
      return action.payload
    },
    postAdded(state, action) {
      return [...state, action.payload]
    },
    postRemoved(state, action) {
        return state.filter((reply) => {
          return reply.id !== action.payload.id
    })
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