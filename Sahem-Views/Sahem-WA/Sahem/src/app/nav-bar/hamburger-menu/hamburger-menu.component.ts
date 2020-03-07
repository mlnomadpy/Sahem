import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }
  openNav(){
    document.getElementById('hamberger').innerHTML = 'close';
  }
}
