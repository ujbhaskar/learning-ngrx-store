import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  trashPost(id: string): void {
    console.log('trashing: ', id);
  }

}
