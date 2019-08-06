import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _stringService:StringService) { }

  ngOnInit() {
  }

  countUppercase(str:string):number{
    return this._stringService.countCapital(str)
  }
}
