import { Post } from 'src/app/model/post.model';

export interface PostsState {
  posts: Post[]
};

export const initialPostsState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'Posts Title 1',
      description: 'Posts Description 1'
    },{
      id: '2',
      title: 'Posts Title 2',
      description: 'Posts Description 2'
    },
  ]
};
