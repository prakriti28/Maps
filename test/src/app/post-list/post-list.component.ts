import { Component, OnInit, OnDestroy} from '@angular/core';

import {Subscription} from 'rxjs';
import {Blog} from '../module';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {
  // latitude: '12.9889767';
  // longitude: '77.4530544' ;
  blogs: Blog[] = [];
  // locations = [{ lat: 12.98420957
  //   , lng: 77.5145092,
  //   image: 'https://images.unsplash.com/photo-1554579384-2d90b36072eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60'},
  // {lat : 26.8467,
  //   lng: 80.9462,
  //   image: 'https://images.unsplash.com/photo-1554579384-2d90b36072eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60'}
  // ];
  locations=[]


  private blogsSub: Subscription;



  constructor(public postsService: PostsService) {


  }

  ngOnInit() {

    this.postsService.getPosts();
    console.log(this.postsService);
    this.blogsSub = this.postsService.getPostUpdateListener().subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
        this.blogs.map((item: any) => {
          console.log(item);
          // tslint:disable-next-line: one-variable-per-declaration
          const location: any = {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude),
            // image: item.image
          };
          this.locations.push(location);


        });
        console.log(this.locations);
    });

  }

  ngOnDestroy() {

    this.blogsSub.unsubscribe();

  }




  //  mapClick(event) {
  //    console.log(event); {

  //     lat: event.coords.lat;
  //     lng: event.coords.lng;
  //    }

  //   }



  // mapClick(event) {
  //   console.log(event); {
  //        lat: event.coords.lat;
  //        lng: event.coords.lng;

  //   }

  // }

  }
