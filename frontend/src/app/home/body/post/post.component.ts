import {Component, Input} from '@angular/core';
import {Post} from '../../../models/post';
import {postPlaceholder} from '../../../models/placeholders';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post = postPlaceholder;
}
