
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NavbarModel } from "../../common/model/navbar/navbarModel";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navList: NavbarModel[] = [
    { name: 'Settings', icon: 'settings', url: 'settings', class: 'example-icon'},
    { name: 'Logout', icon: 'logout', class: 'example-icon', click: 'logout()'},
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(
      (success) => {
      }
    );
  }
}
