import { NavItem } from './nav-item'

export class LoginInfo  {
        username:string;
        password:string;
        branch:string;
        role:number;
        islogin:boolean = false;
        menus:NavItem[];
        fullname:string;
        branchtree:string;
        branchtreesurround:string;
    }

    // export 