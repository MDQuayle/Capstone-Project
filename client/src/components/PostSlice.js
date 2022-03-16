export const addPost = (post) => {
    return {
      type: "post/add",
      payload: post
    };
  };
  
  export const removePost = (postId) => {
    return {
      type: "post/remove",
      payload: postId,
    };
  };
  
  export function upvotePost(postId) {
    return {
      type: "post/upvote",
      payload: postId,
    };
  }
  
  export function downvotePost(postId) {
    return {
      type: "post/downvote",
      payload: postId,
    };
  }
  
  
  const initialState = [];
  
  export default function postReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "post/add":
        return [...state, payload];
      case "post/remove":
        return state.filter((post) => post.id !== payload);
      case "post/upvote":
        return state.map((post) => {
          if (post.id === payload) {
            return {
              ...post,
              votes: post.votes + 1,
            };
          } else {
            return post;
          }
        });
      case "post/downvote":
        return state.map((post) => {
          if (post.id === payload && post.votes > 0) {
            return {
              ...post,
              votes: post.votes - 1,
            };
          } else {
            return post;
          }
        });
      default:
        break;
    }
    return state;
  }