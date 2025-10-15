import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Student } from './interface/Student';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnDestroy {
  protected readonly menuItems = [
    { name: 'Alumnos'},
    { name: 'Clases' },
    { name: 'Cursos' },
  ];

  // Lista de estudiantes
  studentsList: Student[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'María', apellido: 'Gómez', email: 'maria.gomez@example.com' },
    { id: 3, nombre: 'Carlos', apellido: 'Ramírez', email: 'carlos.ramirez@example.com' },
    { id: 4, nombre: 'Lucía', apellido: 'Fernández', email: 'lucia.fernandez@example.com' },
    { id: 5, nombre: 'Diego', apellido: 'Torres', email: 'diego.torres@example.com' },
    { id: 6, nombre: 'Ana', apellido: 'Martínez', email: 'ana.martinez@example.com' },
    { id: 7, nombre: 'Sofía', apellido: 'López', email: 'sofia.lopez@example.com' },
    { id: 8, nombre: 'Matías', apellido: 'Sánchez', email: 'matias.sanchez@example.com' },
    { id: 9, nombre: 'Valentina', apellido: 'Castro', email: 'valentina.castro@example.com' },
    { id: 10, nombre: 'Nicolás', apellido: 'Rojas', email: 'nicolas.rojas@example.com' }
  ];

  addStudent(newStudent: Student) {
    const newId = this.studentsList.length ? Math.max(...this.studentsList.map(s => s.id)) + 1 : 1;
    newStudent.id = newId;
    this.studentsList = [...this.studentsList, newStudent];
  }

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);

    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
