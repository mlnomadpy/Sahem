import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showFiller = false;
  breakpoint = 2;
  breakpoint2 = "2:3";
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";

  }


}
