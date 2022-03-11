import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.timeSair();
  }

  public sair() {
    this.auth.sair();
  }

  public timeSair() {
    setTimeout(() => {
      this.auth.sair();
    },2700000);
  }

}
