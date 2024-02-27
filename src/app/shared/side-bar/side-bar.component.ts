import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {
  public reactiveItems: MenuItem[] = [
    { name: 'Básicos', route: '/reactive/basic'},
    { name: 'Dinámicos', route: '/reactive/dynamic'},
    { name: 'Switches', route: '/reactive/switches'},
  ]

  public authItems: MenuItem[] = [
    { name: 'Register', route: '/auth/signup'},
  ]
}
