import { Component, OnInit} from '@angular/core';
//import {Blog} from '../module';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public image: string;






  constructor(private router: Router, public postService: PostsService) {
  }



  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }


    this.postService.addPost( form.value.latitude, form.value.longitude, form.value.image);
    form.resetForm();
    // this.router.navigate(['/map']);
  }





  ngOnInit() {
  }

}

