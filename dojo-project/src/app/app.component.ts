import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dojo-project';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    debugger
    const a = this.loginService.login('guildafront@FELChagashotmail.onmicrosoft.com ', '94PgyhlUV7Te').subscribe(
      sucesso => {
        debugger
        console.log('logado');
      },
      erro => {
        debugger
        console.log(erro.message);
      }
    );
  }
}
