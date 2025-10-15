import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { Users } from '../users/users';
import { Students } from './students/students';
import { Forms } from './forms/forms';

// Angular Material + CDK necesarios para sidenav
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    Users,
    Students,
    Forms
  ],
  imports: [
    CommonModule,

    // Importaciones necesarias para el sidenav responsive
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
