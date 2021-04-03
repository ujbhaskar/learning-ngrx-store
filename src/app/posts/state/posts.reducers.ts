import {initialPostsState, PostsState} from './posts.state';
import { createReducer, on, Action } from '@ngrx/store';
import {addPost, updatePost, deletePost} from './posts.actions';

const postsReducerFun = createReducer(
  initialPostsState,
  on(addPost, (state: any, action: any) => {
    const existingIds = state.posts.map(post => {
      return Number(post.id);
    }).sort((a, b) => {
      return a - b;
    });
    const newPost = {
      id: (existingIds[existingIds.length - 1] + 1).toString(),
      title: action.title,
      description: action.description
    };
    return {
      ...state,
      posts: [...state.posts, newPost]
    };
  }), on(updatePost, (state: any, action: any) => {
    const postsToUpdate = state.posts.map(post => {
      return post.id === action.id ? action : post;
    });
    return {
      ...state,
      posts: postsToUpdate
    };
  }), on(deletePost, (state: any, action: any) => {
    const updatedPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: updatedPosts
    };
  }),
);

export function postsReducer(state: PostsState, action: Action): any {
  return postsReducerFun(state, action);
}
