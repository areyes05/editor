import {Injectable} from '@angular/core';
import {Post} from '../../../models/post';
import {Observable, Subject} from 'rxjs';
import {PostRestService} from '../rest/post-rest.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  activePost$: Observable<Post>;
  posts$: Observable<Post[]>;
  private _activePostSubject = new Subject<Post>();
  private _postSubject = new Subject<Post[]>();

  constructor(private _postRestService: PostRestService) {
    this.activePost$ = this._activePostSubject.asObservable();
    this.posts$ = this._postSubject.asObservable();
  }

  updatePosts(): void {
    this._postRestService.getPosts().subscribe((posts: Post[]) => {
      this._postSubject.next(posts);
    });
  }

  updateActivePost(post: Post): void {
    this._activePostSubject.next(post);
  }

  savePost(post: Post): Observable<Post> {
    return this._postRestService.savePost(post).pipe(map((post) => {

      return post;
    }));
  }

  deleteAllPosts(): void {
    this._postRestService.deleteAllPosts().subscribe((posts) => {
      this._postSubject.next(posts);
    });
  }
}
