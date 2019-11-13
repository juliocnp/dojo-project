import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logar() {
    debugger
    this.loginService.login(this.usuario, this.senha);
  }

}
