import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../interface/Student';


@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  @Output() studentAdded = new EventEmitter<Student>();

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentAdded.emit(newStudent);  // emito el alumno
      this.studentForm.reset();
    }
  }
}
