import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  //es: [`
  // {
  //color: lightblue;
  //
  //
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus="no server was created";
  serverName='TestServer';
  servercreated=false
  userName='krishna'
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
      
    },2000)
  }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreationStatus="server was created! The name is "+this.serverName;
}
reset(){
  
  this.servercreated=true
  //this.userName=''
}
onUpdateServerName(event: any){
  this.serverName=(<HTMLInputElement>event.target).value;
}
onUpdateUserName(event: any){
  this.userName=(<HTMLInputElement>event.target).value;
}

}
