import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-api-patch',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-patch.component.html',
  styleUrls: ['./api-patch.component.css']
})
export class ApiPatchComponent {
  response: any;
  patchData = { title: '' };

  constructor(private http: HttpClient) { }

  patchPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const patchData = { title: this.patchData.title };

    this.http.patch(url, patchData).subscribe(res => {
      this.response = res;
    });
  }
}
