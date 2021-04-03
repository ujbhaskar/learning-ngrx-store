import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/posts.selectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  editPostForm: FormGroup;
  postSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe(post => {
        this.post = post;
        this.createForm();
      });
    });

  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  createForm(): void {
    if (this.post?.title && this.post?.description) {
      this.editPostForm = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        description: new FormControl(this.post.description, Validators.required)
      });
    }
  }

  submitPostUpdate(): void {
    this.store.dispatch(updatePost({
      ...this.editPostForm.value,
      id: this.post.id
    }));
    this.router.navigateByUrl('/posts');
  }

}
