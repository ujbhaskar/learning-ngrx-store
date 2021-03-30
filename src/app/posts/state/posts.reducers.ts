import {initialPostsState} from './posts.state';
import { createReducer } from '@ngrx/store';

const _postsReducer = createReducer(
  initialPostsState
);

export function postsReducer (state, action) {
  return _postsReducer(state, action);
}
