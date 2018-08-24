import { Component } from '@angular/core';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  menus: any[] = [
    { name: 'Dahsboard', link: 'dashboard' },
    { name: 'Inventories', link: 'inventories' },
    { name: 'Products', link: 'products' }
  ];



}

