import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { CheckerService } from './checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = environment.version;

  constructor(
    private checkerServ: CheckerService,
  ) {
  }

  ngOnInit() {
    // Tự động refresh browser khi deploy version mới!
    this.checkerServ.version();
  }
}
