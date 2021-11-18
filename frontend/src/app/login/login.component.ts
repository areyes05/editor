import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      window.location.href = '';
    }
  }

  onLogin(): void {
    this._httpClient.post<User>('/login', {username: this.username, password: this.password})
      .subscribe((user: User) => {
        localStorage.setItem('userId', user.id);
        window.location.href = '';
      });
  }
}
