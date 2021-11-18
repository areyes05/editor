import type {OnInit} from '@angular/core';
import {Component, Input} from '@angular/core';
import type {User} from '../../../models/user';
import type {Post} from '../../../models/post';
import {PostDataService} from '../../../services/posts/data/post-data.service';
import {userPlaceholder} from '../../../models/placeholders';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent implements OnInit {
  @Input() user: User = userPlaceholder;
  posts: Post[] = [];

  constructor(private _postDataService: PostDataService) {
  }

  ngOnInit(): void {
    this._postDataService.updatePosts();
    this._postDataService.posts$.subscribe((posts) => {
      this.posts = posts;
    });
  }

  onPostSelect(post: Post): void {
    this._postDataService.updateActivePost(post);
  }

  deleteAllPosts(): void {
    this._postDataService.deleteAllPosts();
  }
}
