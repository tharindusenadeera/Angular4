import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FrontService } from './front.service';
import { Front} from './front';

@Component({
  moduleId: module.id,
  selector: 'app-front-component',
  templateUrl: './front-component.component.html',
  styleUrls: ['./front-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontComponentComponent implements OnInit {
  fronts :Front[];
  newData:any={};

  constructor(private _frontService:FrontService) { }

  ngOnInit() {
    this.getFronts();
  }

  getFronts(){
    this.fronts = this._frontService.getFrontsFromService();
  }

  saveData(front:Front){
    this._frontService.addData(front);

  }

}
