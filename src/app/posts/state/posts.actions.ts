import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';

export const addPost = createAction('Posts - Add Post', props<{post: Post}>());
export const updatePost = createAction('Posts - Update Post', props<{post: Post}>());
export const deletePost = createAction('Posts - Delete Post', props<{id: string}>());
