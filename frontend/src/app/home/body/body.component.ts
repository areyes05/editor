import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {User} from '../../models/user';
import {UserRestService} from '../../services/users/rest/user-rest.service';
import {userPlaceholder} from '../../models/placeholders';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  posts: Post[] = [];
  user!: User;
  friends!: User[];

  constructor(private _userRestService: UserRestService) {
    this.user = userPlaceholder;
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
      return;
    }
    this._userRestService.getUser(userId).subscribe(user => this.user = user);
  }
}
