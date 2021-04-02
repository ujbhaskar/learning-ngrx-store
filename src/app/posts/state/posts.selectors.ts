import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from './posts.state';


export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, state => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts.find((post) => {
    return post.id === props.id;
  });
});
