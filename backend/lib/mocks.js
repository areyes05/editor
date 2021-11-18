"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedPosts = exports.mockedUser = void 0;
exports.mockedUser = {
    name: 'test user',
    id: 'test-id',
    posts: [],
};
exports.mockedPosts = [{
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
