import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Delected = {
  message: string;
  deletedId: number
}

@Component({
  standalone: true,
  selector: 'app-api-delete',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-delete.component.html',
  styleUrls: ['./api-delete.component.css']
})

export class ApiDeleteComponent {
  postId: number = 0;
  selectedPost: Post | null = null;
  deleteMessage: string = '';

  constructor(private http: HttpClient) { }


  getPostById() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    this.http.get<Post>(url).subscribe((post) => {
      this.selectedPost = post;
      this.deleteMessage = '';
    });
  }

  deletePost() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    this.http.delete<Delected>(url).subscribe(() => {
      this.deleteMessage = `O post com ID ${this.postId} foi deletado com sucesso.`;
      this.selectedPost = null;
    });
  }
}
