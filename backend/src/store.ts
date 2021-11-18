import {Post} from './models/post';
import {UserMin} from './models/user-min';
import {readFile, writeFile} from 'fs/promises';
import {Data} from './models/data';

const route = 'src/data/data.json';

export const saveUser = async (userMin: UserMin): Promise<UserMin[]> => {
  const data = await readFile(route, {encoding: null});
  const dataSaved: Data = JSON.parse(data.toString());
  dataSaved.users.push(userMin);
  const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
  writeFile(route, dataToWrite, {encoding: 'utf-8'});
  console.log('success', dataSaved);
  return dataSaved.users;
};

export const getPosts = async (): Promise<Post[]> => {
  const data = await readFile(route, {encoding: null});
  const dataSaved: Data = JSON.parse(data.toString());
  return dataSaved.posts;
};

export const savePost = async (post: Post): Promise<Post> => {
  const data = await readFile(route, {encoding: null});
  const dataSaved: Data = JSON.parse(data.toString());
  dataSaved.posts.push(post);
  const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
  writeFile(route, dataToWrite, {encoding: 'utf-8'});
  return post;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const data = await readFile(route, {encoding: null});
  const dataSaved: Data = JSON.parse(data.toString());
  const index = dataSaved.posts.indexOf(post);
  if (index === -1) {
    throw new Error('not found');
  }
  const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
  writeFile(route, dataToWrite, {encoding: 'utf-8'});
  return post;
};

export const deletePosts = async () => {
  const data = await readFile(route, {encoding: null});
  const dataSaved: Data = JSON.parse(data.toString());
  dataSaved.posts = [];
  const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
  writeFile(route, dataToWrite, {encoding: 'utf-8'});
  return dataSaved.posts;
};
