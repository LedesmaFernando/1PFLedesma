import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../interface/Student';


@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements AfterViewInit {
  @Input() set students(data: Student[]) {
    this.dataSource.data = data;
  }

  displayedColumns: string[] = ['id', 'nombreCompleto', 'email'];
  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

