import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
// import {PostsService} from './posts.service';

import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import {AgmCoreModule} from '@agm/core';




@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyAsFTtNd5UvFnzDk9sTD0EyesFkWVKQoZY'
      // apiKey: 'IzaSyCOAZ3sQ2kjkL8f7Uoil6B3R4fT562HsXM'
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
