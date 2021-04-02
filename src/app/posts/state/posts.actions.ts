import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';

export const addPost = createAction('Posts - Add Post', props<{post: Post}>());
