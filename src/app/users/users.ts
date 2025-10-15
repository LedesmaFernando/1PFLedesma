import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

// Angular Material modules (se usan en el HTML pero no es necesario importarlos aquí 
// a menos que sea un componente standalone, que este no lo es)

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnDestroy {
  // Lista de navegación de ejemplo
  protected readonly menuItems = [
  { name: 'Alumnos', route: '/alumnos', icon: 'groups' },
  { name: 'Clases', route: '/clases', icon: 'school' },
  { name: 'Cursos', route: '/cursos', icon: 'menu_book' },
];

  // Contenido de ejemplo
  protected readonly fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  // Signal que indica si es una pantalla móvil
  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    // Detecta si es una pantalla menor a 600px
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);

    // Escucha cambios de tamaño de pantalla
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  // Limpia el listener al destruirse el componente
  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
