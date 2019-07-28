import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() sharedObject = new EventEmitter()
  constructor() { }
  public SendDataToParent(data){
    this.sharedObject.emit(data)
  }
  ngOnInit() {
  }

}
