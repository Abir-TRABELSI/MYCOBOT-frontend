import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'ni ni-tv-2 text-primary', class: '' },
    { path: '/mushroom-analysis', title: 'Mushroom Analysis',  icon:'fa-brands fa-wpforms', class: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
