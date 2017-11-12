import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-front-component',
  templateUrl: './front-component.component.html',
  styleUrls: ['./front-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
