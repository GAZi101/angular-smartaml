import { Component } from '@angular/core';
import { LoginInfo } from './service/login-model';
import { LoginService } from './service/login.service';
import { NavItem } from './service/nav-item';
// For MDB Angular Free


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'brand-new-smartaml';
  loginInfo: LoginInfo;
  navItem:NavItem[];

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    // this.loginService.fetchlogininfo();
    this.loginService.getJSON().subscribe((data:LoginInfo) => {
      this.loginInfo = data;
      this.navItem = data.menus;
      console.log(this.loginInfo);
    });
  }
}
