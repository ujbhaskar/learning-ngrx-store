import {initialPostsState, PostsState} from './posts.state';
import { createReducer, on, Action } from '@ngrx/store';
import {addPost} from './posts.actions';

const postsReducerFun = createReducer(
  initialPostsState,
  on(addPost, (state: any, action: any) => {
    console.log('action: ', action);
    console.log('state: ', state);
    const newPost = {
      id: (state.posts.length + 1).toString(),
      title: action.title,
      description: action.title
    };
    return {
      ...state,
      posts: [...state.posts, newPost]
    };
  })
);

export function postsReducer(state: PostsState, action: Action): any {
  return postsReducerFun(state, action);
}
