import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgFor,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    menu = [
    { item: 'List', url: './list' },
    { item: 'Add', url: './add' },
    { item: 'Log In', url: './login' },
  ];

}
