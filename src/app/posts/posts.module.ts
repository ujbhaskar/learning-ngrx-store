import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducers';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent
      },
      {
        path: 'edit/:id',
        component: EditPostComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postsReducer),
  ],
})
export class PostsModule { }
