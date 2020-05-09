import { Component, OnInit } from '@angular/core';
import { CreatorsService } from '../creators.service';
import { Creator } from 'src/app/Models/User/Creator';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showFiller = false;
  breakpoint = 2;
  breakpoint2 = "2:3";
  creator: Creator;
  creatorObject: {
    creator: Creator
  };
  imageLink: string;
  constructor(private creatorService: CreatorsService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";

    this.getCreator();
  }

  getCreator() {
    // this.creatorService.getCreatorProfile()
    //   .subscribe(creator => this.creator = creator);
    const p = new Promise(async (res, rej) => {
      (await this.creatorService.getCreatorProfile()).subscribe(creator => {
        this.creatorObject = creator;
        this.creator = this.creatorObject.creator;
        console.log(this.creator);
      });
      res('resolved');
    });
    return p;
  }


  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";

  }


}
