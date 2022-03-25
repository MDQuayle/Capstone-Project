import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    entities: [],
  },
  reducers: {
    postAdded(state, action) {
      state.entities.push({ id: uuid(), ...action.payload });
    },
    postRemoved(state, action) {
      const index = state.entities.findIndex((r) => r.id === action.payload);
      state.entities.splice(index, 1);
    },
    postUpvote(state, action){
      return state.entities.map((post) => {
        if (post.id === action.payload) {
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
      return state.entities.map((post) => {
        if (reply.id === action.payload && post.votes > 0) {
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

export const { postAdded, postRemoved, postUpvote, postDownvote } = postSlice.actions;

export default postSlice.reducer;