import { Component, OnInit } from '@angular/core';

export class AllotmentConfig {
  rooms: number;
  adults: number;
  childrens: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allotmentConfig: AllotmentConfig = new AllotmentConfig();

  constructor() {

  }

  ngOnInit() {
    this.allotmentConfig.rooms = 1;
    this.allotmentConfig.adults = 1;
    this.allotmentConfig.childrens = 0;
  }

  disableIfRoomFull() {
    return (this.allotmentConfig.adults + this.allotmentConfig.childrens) === (this.allotmentConfig.rooms * 4);
  }

  plusOneRoom() {
    if (this.allotmentConfig.rooms !== 5) {
      this.allotmentConfig.rooms += 1;

      if (this.allotmentConfig.adults < this.allotmentConfig.rooms) {
        this.allotmentConfig.adults = this.allotmentConfig.rooms;
      }
    }
  }

  minusOneRoom() {
    if (this.allotmentConfig.rooms > 1) {
      this.allotmentConfig.rooms -= 1;

      if ((this.allotmentConfig.adults + this.allotmentConfig.childrens) > (this.allotmentConfig.rooms * 4)) {
        let extraPersons = (this.allotmentConfig.adults + this.allotmentConfig.childrens) - (this.allotmentConfig.rooms * 4);
        if (this.allotmentConfig.childrens >= extraPersons) {
          this.allotmentConfig.childrens -= extraPersons;
        } else {
          extraPersons -= this.allotmentConfig.childrens;
          this.allotmentConfig.childrens = 0;
          this.allotmentConfig.adults -= extraPersons;
        }
      }
    }
  }

  plusOneAdult() {
    if ((this.allotmentConfig.adults + this.allotmentConfig.childrens) < (this.allotmentConfig.rooms * 4)) {
      this.allotmentConfig.adults += 1;
    }
  }


  minusOneAdult() {
    if ((this.allotmentConfig.adults - this.allotmentConfig.rooms) > 0) {
      this.allotmentConfig.adults -= 1;
    }
  }


  plusOneChildren() {
    if ((this.allotmentConfig.adults + this.allotmentConfig.childrens) < (this.allotmentConfig.rooms * 4)) {
      this.allotmentConfig.childrens += 1;
    }
  }


  minusOneChildren() {
    if (this.allotmentConfig.childrens > 0) {
      this.allotmentConfig.childrens -= 1;
    }
  }
}
