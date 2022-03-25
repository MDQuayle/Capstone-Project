import { createSlice } from "@reduxjs/toolkit";

const repliesSlice = createSlice({
  name: "replies",
  initialState: [],
  reducers: {
    replyAdded(state, action) {
      return [...state, action.payload]
    },
    replyRemoved(state, action) {
      const index = state.findIndex((r) => r.id === action.payload);
      state.splice(index, 1);
    },
    replyUpvote(state, action){
      return state.map((reply) => {
        if (reply.id === action.payload.id) {
          return {
            ...reply,
            votes: reply.votes + 1,
          };
        } else {
          return reply;
        }
      })
    },
    replyDownvote(state, action){
      return state.map((reply) => {
        if (reply.id === action.payload.id && reply.votes > 0) {
          return {
            ...reply,
            votes: reply.votes - 1,
          };
        } else {
          return reply;
        }
    })
  },
}});

export const { reviewAdded, reviewRemoved, replyUpvote, replyDownvote } = repliesSlice.actions;

export default repliesSlice.reducer;