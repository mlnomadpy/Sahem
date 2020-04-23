import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme: any;
  bodyClass: any;
  themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  tmp: any;
  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || (this.tmp = Object.keys(this.themeMap)[0], localStorage.setItem('theme', this.tmp), this.tmp);
    const bodyClass = document.body.classList;
    bodyClass.add(theme);

  }




  toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = this.themeMap[current];

    this.bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    console.log("clicked");
  }

}
