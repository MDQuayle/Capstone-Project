import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const repliesSlice = createSlice({
  name: "replies",
  initialState: {
    entities: [],
  },
  reducers: {
    replyAdded(state, action) {
      state.entities.push({ id: uuid(), ...action.payload });
    },
    replyRemoved(state, action) {
      const index = state.entities.findIndex((r) => r.id === action.payload);
      state.entities.splice(index, 1);
    },
    replyUpvote(state, action){
      return state.entities.map((reply) => {
        if (reply.id === action.payload) {
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
      return state.entities.map((reply) => {
        if (reply.id === action.payload && reply.votes > 0) {
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