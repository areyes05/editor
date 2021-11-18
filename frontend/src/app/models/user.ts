import {Post} from './post';

export interface User {
  id: string;
  name: string;
  posts: Post[];
}
