import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('user').subscribe(
      (data) => {
        console.log('data', data);
      }, (error) => {

      }
    );
  }

}
