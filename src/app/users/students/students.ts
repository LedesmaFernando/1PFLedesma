import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from '../interface/Student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource<Student>(STUDENTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export const STUDENTS: Student[] = [
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
