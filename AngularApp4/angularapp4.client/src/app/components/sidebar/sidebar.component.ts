import { Component, OnInit } from '@angular/core';
import { Menu } from "../../common/model/menu/menuModel";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuList: Menu[] = [
    { name: 'Dashboard', icon: 'dashboard', url: 'dashboard' },
    { name: 'User List', icon: 'dashboard', url: 'userList' },
    { name: 'Organization List', icon: 'pie_chart', url: 'organizationList' },
    { name: 'Call', icon: 'insert_link', url: 'calling' },
    // { name: 'Şifre Resetleme', url: 'passwordReset' },
  ];

  constructor() { }

  getMenuList() {
    return this.menuList;
  }

  ngOnInit(): void { }

}