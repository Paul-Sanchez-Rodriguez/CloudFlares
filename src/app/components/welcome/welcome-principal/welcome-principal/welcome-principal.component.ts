import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/components/login/services/login.service';
import { MessageService } from 'src/app/components/login/services/message.service';

@Component({
  selector: 'app-welcome-principal',
  templateUrl: './welcome-principal.component.html',
  styleUrls: ['./welcome-principal.component.scss']
})
export class WelcomePrincipalComponent {

  isLogged!: boolean;
  idAdmin!: boolean;
  username!: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private loginService: LoginService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe(res => {
        this.username = res['text'];
        this.isLogged = res['isLogged'];
        this.idAdmin = res['idAdmin'];
      },
      err => console.log(err));
    }

  login(){
    this.loginService.login();
  }

  logout(){
    this.loginService.logout();
  }

}
