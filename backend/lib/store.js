"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePosts = exports.updatePost = exports.savePost = exports.getPosts = exports.saveUser = void 0;
const promises_1 = require("fs/promises");
const route = 'src/data/data.json';
const saveUser = async (userMin) => {
    const data = await (0, promises_1.readFile)(route, { encoding: null });
    const dataSaved = JSON.parse(data.toString());
    dataSaved.users.push(userMin);
    const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
    (0, promises_1.writeFile)(route, dataToWrite, { encoding: 'utf-8' });
    console.log('success', dataSaved);
    return dataSaved.users;
};
exports.saveUser = saveUser;
const getPosts = async () => {
    const data = await (0, promises_1.readFile)(route, { encoding: null });
    const dataSaved = JSON.parse(data.toString());
    return dataSaved.posts;
};
exports.getPosts = getPosts;
const savePost = async (post) => {
    const data = await (0, promises_1.readFile)(route, { encoding: null });
    const dataSaved = JSON.parse(data.toString());
    dataSaved.posts.push(post);
    const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
    (0, promises_1.writeFile)(route, dataToWrite, { encoding: 'utf-8' });
    return post;
};
exports.savePost = savePost;
const updatePost = async (post) => {
    const data = await (0, promises_1.readFile)(route, { encoding: null });
    const dataSaved = JSON.parse(data.toString());
    const index = dataSaved.posts.indexOf(post);
    if (index === -1) {
        throw new Error('not found');
    }
    const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
    (0, promises_1.writeFile)(route, dataToWrite, { encoding: 'utf-8' });
    return post;
};
exports.updatePost = updatePost;
const deletePosts = async () => {
    const data = await (0, promises_1.readFile)(route, { encoding: null });
    const dataSaved = JSON.parse(data.toString());
    dataSaved.posts = [];
    const dataToWrite = new Uint8Array(Buffer.from(JSON.stringify(dataSaved)));
    (0, promises_1.writeFile)(route, dataToWrite, { encoding: 'utf-8' });
    return dataSaved.posts;
};
exports.deletePosts = deletePosts;
