import { createSlice } from "@reduxjs/toolkit";

const repliesSlice = createSlice({
  name: "replies",
  initialState: [],
  reducers: {
    populate( state, action ) {
      return action.payload
    },
    replyAdded(state, action) {
      return [...state, action.payload]
    },
    replyRemoved(state, action) {
      return state.filter((reply) => {
        return reply.id !== action.payload.id
    })
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

export const { populate, replyAdded, replyRemoved, replyUpvote, replyDownvote } = repliesSlice.actions;

export default repliesSlice.reducer;