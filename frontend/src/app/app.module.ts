import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './home/body/post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HeaderComponent} from './home/header/header.component';
import {BodyComponent} from './home/body/body.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {PostFactoryComponent} from './home/body/post-factory/post-factory.component';
import {LeftColumnComponent} from './home/body/left-column/left-column.component';
import {MarkdownComponent} from './helpers/markdown/markdown.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    BodyComponent,
    PostFactoryComponent,
    LeftColumnComponent,
    MarkdownComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: environment.backendProvider,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
