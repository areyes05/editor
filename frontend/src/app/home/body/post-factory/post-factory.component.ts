import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Post} from '../../../models/post';
import {PostDataService} from '../../../services/posts/data/post-data.service';
import {postPlaceholder} from '../../../models/placeholders';

@Component({
  selector: 'app-post-factory',
  templateUrl: './post-factory.component.html',
  styleUrls: ['./post-factory.component.scss']
})
export class PostFactoryComponent implements OnInit {
  @Input() user!: User;
  post!: Post;

  constructor(private _postDataService: PostDataService) {
    this._postDataService.activePost$.subscribe((post) => {
      this.post = post;
    });
  }

  ngOnInit(): void {
    this.post = postPlaceholder;
  }

  savePost(): void {
    this._postDataService.savePost(this.post).subscribe((post) => {
      this.post = post;
      console.log('saved'); // todo: replace for toast
    });
  }
}
