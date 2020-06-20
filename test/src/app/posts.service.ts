
import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {Blog} from './module';

@Injectable({providedIn: 'root'})



export class PostsService {
  private blogs: Blog [] = [];
  private postsUpdated = new Subject < Blog[]>();


constructor(private http: HttpClient) {

}

  getPosts() {
    this.http.get<{message: any , blogs: any}>('http://localhost:5000/blogs'
    )

    .subscribe((blogData) => {
    this.blogs = blogData.blogs;
    this.postsUpdated.next([...this.blogs]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }




  addPost( latitude: number, longitude: number, image: string) {
    // console.log(latitude);
    // console.log(latitude);
    const blog: Blog = { latitude, longitude, image};
    console.log(blog);


    this.http.post('http://localhost:5000/blogs', blog)
    .subscribe((responseData) => {
      console.log(responseData);
      this.blogs.push(blog);
      this.postsUpdated.next([... this.blogs]);
    });
}

}


