import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  theme: any;
  bodyClass: any;
  themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  tmp: any;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || (this.tmp = Object.keys(this.themeMap)[0], localStorage.setItem('theme', this.tmp), this.tmp);
    this.bodyClass = document.body.classList;
    this.bodyClass.add(theme);

    this.isLoggedIn = this.auth.isLoggedIn();
  }
  logout(){
    this.auth.logout();
  }



  toggleTheme() {

    const current = localStorage.getItem('theme');
    console.log(current);
    const next = this.themeMap[current];

    this.bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    console.log("clicked");
  }

}
