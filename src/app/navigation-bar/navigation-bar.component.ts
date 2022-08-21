import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  isHomeClicked: boolean = false;
  isDevClicked: boolean = false;
  isYoutybeClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isHomeClicked = true;
    this.isDevClicked = false;
    this.isYoutybeClicked = false;
  }

  clicked(btn: string) {
    switch (btn) {
      case 'home':
        this.isHomeClicked = true;
        this.isDevClicked = false;
        this.isYoutybeClicked = false;
        break;
      case 'dev':
        this.isDevClicked = true;
        this.isHomeClicked = false;
        this.isYoutybeClicked = false;
        break;
      case 'youtube':
        this.isYoutybeClicked = true;
        this.isDevClicked = false;
        this.isHomeClicked = false;
    }
  }

}
