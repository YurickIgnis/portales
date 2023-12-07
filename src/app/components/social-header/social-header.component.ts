import { Component, Input, HostListener } from '@angular/core';
import { PublicAPI } from 'src/app/services/interfaces/public.api.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-header',
  templateUrl: './social-header.component.html',
  styleUrls: ['./social-header.component.scss']
})
export class SocialHeaderComponent {

  @Input()
  pubApi!: PublicAPI;

  isCollapsed: boolean = true;
  userInteracted: boolean = false;
  isScrolled: boolean = false; // Agrega una variable para rastrear si se ha desplazado


  constructor(private router: Router) {}

  navigateToAyudaPage() {
    this.router.navigate(['/ayuda']);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:click', ['$event'])
  clickEvent(event: MouseEvent) {
    this.userInteracted = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Detecta cuando se desplaza hacia abajo
    this.isScrolled = window.scrollY > 0;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.userInteracted) {
        this.isCollapsed = true;
      }
    }, 10000);
  }
}
