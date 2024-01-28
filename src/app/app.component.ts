import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from './components/login/services/login.service';
import { MessageService } from './components/login/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexy-angular';

  isAdmin!: boolean;

  constructor(
    private oauthService: OAuthService,
    private messageService: MessageService,
    private loginService: LoginService) {
    this.configure();
  }

  authConfig: AuthConfig = {

    issuer: 'http://localhost:8090/realms/PRS',
    redirectUri: window.location.origin,
    clientId: 'backend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
      .then(() => {
        if (this.oauthService.hasValidIdToken()) {
          this.isAdmin = this.loginService.getIsAdmin();
          const username = this.oauthService.getIdentityClaims()['preferred_username']
          this.messageService.sendMessage(username, this.loginService.getIsLoggerd(), this.isAdmin);
        }
      });

  }
}
