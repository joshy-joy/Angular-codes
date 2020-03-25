import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  content = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    if(this.content){
      this.content = false;
    }
    else{
      this.content = true;
      this.logs.push(Date.now())
    }
  }

}
