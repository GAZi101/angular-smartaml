import { Component, ViewEncapsulation } from '@angular/core';
import { LoginInfo } from './service/login-model';
import { LoginService } from './service/login.service';
import { NavItem } from './service/nav-item';
// For MDB Angular Free


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  // title = 'brand-new-smartaml';
  loginInfo: LoginInfo;
  navItem:NavItem[] ;
  // [{
  //   displayName: 'DevFestFL',
  //   iconName: 'close',
  //   children: [
  //     {
  //       displayName: 'Speakers',
  //       iconName: 'group',
  //       children: [
  //         {
  //           displayName: 'Michael Prentice',
  //           iconName: 'person',
  //           route: 'michael-prentice',
  //           children: [
  //             {
  //               displayName: 'Create Enterprise UIs',
  //               iconName: 'star_rate',
  //               route: 'material-design'
  //             }
  //           ]
  //         },
  //         {
  //           displayName: 'Stephen Fluin',
  //           iconName: 'person',
  //           route: 'stephen-fluin',
  //           children: [
  //             {
  //               displayName: 'What\'s up with the Web?',
  //               iconName: 'star_rate',
  //               route: 'what-up-web'
  //             }
  //           ]
  //         },
  //         {
  //           displayName: 'Mike Brocchi',
  //           iconName: 'person',
  //           route: 'mike-brocchi',
  //           children: [
  //             {
  //               displayName: 'My ally, the CLI',
  //               iconName: 'star_rate',
  //               route: 'my-ally-cli'
  //             },
  //             {
  //               displayName: 'Become an Angular Tailor',
  //               iconName: 'star_rate',
  //               route: 'become-angular-tailer'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       displayName: 'Sessions',
  //       iconName: 'speaker_notes',
  //       children: [
  //         {
  //           displayName: 'Create Enterprise UIs',
  //           iconName: 'star_rate',
  //           route: 'material-design'
  //         },
  //         {
  //           displayName: 'What\'s up with the Web?',
  //           iconName: 'star_rate',
  //           route: 'what-up-web'
  //         },
  //         {
  //           displayName: 'My ally, the CLI',
  //           iconName: 'star_rate',
  //           route: 'my-ally-cli'
  //         },
  //         {
  //           displayName: 'Become an Angular Tailor',
  //           iconName: 'star_rate',
  //           route: 'become-angular-tailer'
  //         }
  //       ]
  //     },
  //     {
  //       displayName: 'Feedback',
  //       iconName: 'feedback',
  //       route: 'feedback'
  //     }
  //   ]
  // },
  // {
  //   displayName: 'Disney',
  //   iconName: 'close',
  //   children: [
  //     {
  //       displayName: 'Speakers',
  //       iconName: 'group',
  //       children: [
  //         {
  //           displayName: 'Michael Prentice',
  //           iconName: 'person',
  //           route: 'michael-prentice',
  //           children: [
  //             {
  //               displayName: 'Create Enterprise UIs',
  //               iconName: 'star_rate',
  //               route: 'material-design'
  //             }
  //           ]
  //         },
  //         {
  //           displayName: 'Stephen Fluin',
  //           iconName: 'person',
  //           route: 'stephen-fluin',
  //           children: [
  //             {
  //               displayName: 'What\'s up with the Web?',
  //               iconName: 'star_rate',
  //               route: 'what-up-web'
  //             }
  //           ]
  //         },
  //         {
  //           displayName: 'Mike Brocchi',
  //           iconName: 'person',
  //           route: 'mike-brocchi',
  //           children: [
  //             {
  //               displayName: 'My ally, the CLI',
  //               iconName: 'star_rate',
  //               route: 'my-ally-cli'
  //             },
  //             {
  //               displayName: 'Become an Angular Tailor',
  //               iconName: 'star_rate',
  //               route: 'become-angular-tailer'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       displayName: 'Sessions',
  //       iconName: 'speaker_notes',
  //       children: [
  //         {
  //           displayName: 'Create Enterprise UIs',
  //           iconName: 'star_rate',
  //           route: 'material-design'
  //         },
  //         {
  //           displayName: 'What\'s up with the Web?',
  //           iconName: 'star_rate',
  //           route: 'what-up-web'
  //         },
  //         {
  //           displayName: 'My ally, the CLI',
  //           iconName: 'star_rate',
  //           route: 'my-ally-cli'
  //         },
  //         {
  //           displayName: 'Become an Angular Tailor',
  //           iconName: 'star_rate',
  //           route: 'become-angular-tailer'
  //         }
  //       ]
  //     },
  //     {
  //       displayName: 'Feedback',
  //       iconName: 'feedback',
  //       route: 'feedback'
  //     }
  //   ]
  // }]
  // ;

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    // this.loginService.fetchlogininfo();
    this.loginService.getJSON().subscribe((data:LoginInfo) => {
      this.navItem = data.menus;
      console.log(this.navItem);
    });
  }
}
