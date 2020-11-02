import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/service/nav-item';

@Component({
  selector: 'app-navbar-tree',
  templateUrl: './navbar-tree.component.html',
  styleUrls: ['./navbar-tree.component.css']
})
export class NavbarTreeComponent implements OnInit, AfterViewInit  {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu:NavItem[];
  
  constructor(public router: Router) {
  }
  ngOnInit() { 
    console.log(this.items);
  }
  ngAfterViewInit() { 

  }

}
