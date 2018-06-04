import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  increaseOneLoveit(index: number) {
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  decreaseOneLoveit(index: number) {
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
  }
}
