import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: Object = {};
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers()
      .subscribe((data) => {
        this.userData = data;
        console.log('users data', this.userData);
      });
  }

  firstClick() {
  }
}
