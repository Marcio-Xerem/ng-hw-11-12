import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-api-put',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-put.component.html',
  styleUrl: './api-put.component.css'
})
export class ApiPutComponent {
  response: any;
  updatedPost = { id: 1, title: '', body: '', userId: 0 }; // ID fixo, userId manipulável

  constructor(private http: HttpClient) { }

  updatePost() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.updatedPost.id}`;
    this.http.put(url, this.updatedPost).subscribe(res => {
      this.response = res;
    });
  }
}
