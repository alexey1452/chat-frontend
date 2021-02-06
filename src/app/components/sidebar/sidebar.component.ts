import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GroupCreateDialogComponent} from '../group-create-dialog/group-create-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  data = [{
    image: 'https://pyxis.nymag.com/v1/imgs/e82/a58/d9c58af106c5bfc45fc68f5c46834b2cbc-post-avatar-viewing-guide.rhorizontal.w700.jpg',
    message: 'The latest message from the chat from dialog',
    id: 1,
    title: 'Diallog 1'
  }, {
    image: 'https://pyxis.nymag.com/v1/imgs/e82/a58/d9c58af106c5bfc45fc68f5c46834b2cbc-post-avatar-viewing-guide.rhorizontal.w700.jpg',
    message: 'The latest message from the chat',
    id: 2,
    title: 'Diallog 2'
  }];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(GroupCreateDialogComponent, {
      width: '300px',
    });
  }
}
