import {of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {User} from '../models/user';
import {Post} from '../models/post';

export interface Conditions {
  condition: (urlWithParams: string) => boolean;
  func: (urlWithParams: string) => any;
}

export const ok = (body: any) => of(new HttpResponse({status: 200, body}));

const mockedUser: User = {
  name: 'test user',
  id: 'test-id',
  posts: [],
};

const mockedPosts: Post[] = [{
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

export const getConditions: Conditions[] = [
  {
    condition: (url: string) => url.match(/\/api\/user\/[A-Za-z\-]+$/) !== null,
    func: (url: string) => ok(mockedUser),
  },
  {
    condition: (url: string) => url.match(/\/api\/getFriendsPosts\/[A-Za-z\-]+$/) !== null,
    func: (url: string) => ok(mockedPosts),
  },
];
export const postConditions: Conditions[] = [
  {
    condition: (url: string) => url.match(/\/api\/login$/) !== null,
    func: (url: string) => ok(mockedUser),
  }, {
    condition: (url: string) => url.match(/\/api\/post/) !== null,
    func: (url: string) => ok([]),
  },
];
export const putConditions: Conditions[] = [
  {
    condition: (url: string) => url.match(/\/api\/user\/[A-Za-z\-]+$/) !== null,
    func: (url: string) => ok(mockedUser),
  }
];
