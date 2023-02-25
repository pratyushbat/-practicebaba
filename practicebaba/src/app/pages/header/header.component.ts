import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeTab: string;
  constructor(private router: Router) {}

  goToType(type: string) {
    this.activeTab = type;
    this.router.navigate([type]);
  }
}
