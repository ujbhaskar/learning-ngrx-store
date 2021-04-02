import {initialPostsState} from './posts.state';
import { createReducer } from '@ngrx/store';

const postsReducerFun = createReducer(
  initialPostsState
);

export function postsReducer(state, action) {
  return postsReducerFun(state, action);
}
