import {User} from './models/user';
import {Post} from './models/post';

export const mockedUser: User = {
  name: 'test user',
  id: 'test-id',
  posts: [],
};

export const mockedPosts: Post[] = [{
  ownerId: '1',
  ownerName: 'User 1',
  date: new Date(),
  content: 'test content',
}, {
  ownerId: '1',
  ownerName: 'User 2',
  date: new Date(),
  content: 'test content2',
}, {
  ownerId: '3',
  ownerName: 'User 3',
  date: new Date(),
  content: 'test content3',
}];
