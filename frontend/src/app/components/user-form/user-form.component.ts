import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      department: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.apiService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.successMessage = 'Form submitted successfully!';
        this.errorMessage = '';
        this.userForm.reset();
      },
      error: () => {
        this.errorMessage = 'Something went wrong!';
        this.successMessage = '';
      }
    });
  }
}
