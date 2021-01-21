import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';
allowUsername=false;

  constructor() {
    if (this.userName!==''){
      this.allowUsername=true;
    }
   }

  ngOnInit(): void {
  }

  /*
  onUpdateuserName(event:Event){
    this.allowUsername=true
    this.userName = (<HTMLInputElement>event.target).value
    }
    */

  onCreateUser(){
  this.userName=''
  }

}
