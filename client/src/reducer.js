import { combineReducers } from "redux";
import postReducer from "./components/PostSlice";
import replyReducer from "./components/ReplySlice"

export default combineReducers({
  posts: postReducer,
  replies: replyReducer,
});
