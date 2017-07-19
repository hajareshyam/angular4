import { Component, OnInit } from '@angular/core';
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message: any;

  constructor(private alert: AlertService) { }

  ngOnInit() {
    this.alert.getMessage().subscribe(message => { this.message = message; });
  }

  $timeout
}
