import { Component, OnInit } from '@angular/core';
import {setTimeout} from 'timers';

@Component({
  selector: 'app-servers',
  /*  selector: '[app-servers]',
  selector: '.app-servers',*/
  /*template: `<app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = 'TestServer';
  username = '';
  display = true;
  clicks = [];
  toggleCount = 0;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  toggleDisplay() {
    /*this.clicks.push('Toggle Count: ' + ++this.toggleCount);*/
    this.clicks.push(new Date());
    this.display = !this.display;
  }

  onUpdateServerName(event: any) {
    /*console.log(event);*/
    this.serverName = event.target.value;
  }

  onReset() {
    this.username = '';
  }
}
