import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.scss',
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {title: 'Contador', route:'counter'},
    {title: 'usuario', route:'user-info'},
    {title: 'Mutaciones', route:'properties'},
  ]);
  //Ttradicional
  // public menuItems: MenuItem[] = [
  //   {title: 'Contador', route:'counter'},
  //   {title: 'usuario', route:'user-info'},
  //   {title: 'Mutaciones', route:'properties'},
  // ];

 }
