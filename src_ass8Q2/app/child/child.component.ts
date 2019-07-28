import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentToChildData;
  public childToParentData = "Hi From Child";
  @Output() childObjectEmitter = new EventEmitter(); 
  public replyBack(){
    this.childObjectEmitter.emit(this.childToParentData)
  }
  constructor() { }

  ngOnInit() {
  }

}
