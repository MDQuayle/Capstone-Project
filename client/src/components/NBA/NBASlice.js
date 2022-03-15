export const addReply = (reply) => {
    return {
      type: "reply/add",
      payload: reply
    };
  };
  
  export const removeReply = (replyId) => {
    return {
      type: "reply/remove",
      payload: replyId,
    };
  };
  
  export function upvoteReply(replyId) {
    return {
      type: "reply/upvote",
      payload: replyId,
    };
  }
  
  export function downvoteReply(replyId) {
    return {
      type: "reply/downvote",
      payload: replyId,
    };
  }
  
  
  const initialState = [];
  
  export default function replyReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "reply/add":
        return [...state, payload];
      case "reply/remove":
        return state.filter((reply) => reply.id !== payload);
      case "reply/upvote":
        return state.map((reply) => {
          if (reply.id === payload) {
            return {
              ...reply,
              votes: reply.votes + 1,
            };
          } else {
            return reply;
          }
        });
      case "reply/downvote":
        return state.map((reply) => {
          if (reply.id === payload && reply.votes > 0) {
            return {
              ...reply,
              votes: reply.votes - 1,
            };
          } else {
            return reply;
          }
        });
      default:
        break;
    }
    return state;
  }