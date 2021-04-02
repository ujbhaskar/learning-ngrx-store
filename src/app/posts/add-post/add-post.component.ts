import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup = new FormGroup(
    {
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200)
      ])
    }
  );
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  submitAddPost(): void {
    console.log('in submit: ', this.addPostForm.value);
    this.store.dispatch(addPost(this.addPostForm.value));
    this.addPostForm.reset();
  }

}
