import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';
import type {Post} from '../../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostRestService {

  constructor(private _http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`/posts`);
  }

  savePost(post: Post): Observable<Post> {
    return this._http.post<Post>(`/post`, {post});
  }

  deleteAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`/deletePosts`);
  }
}
