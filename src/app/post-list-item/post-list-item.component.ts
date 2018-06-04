import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  increaseLoveits(){
    this.postsService.increaseOneLoveit(this.index);
  }

  decreaseLoveits(){
    this.postsService.decreaseOneLoveit(this.index);
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }
}
