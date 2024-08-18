import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit {
  form!: FormGroup;
  successMsg: string | null = null;
  errorMsg: string | null = null;

  constructor(private router: Router, private user: UserService) {}

  ngOnInit(): void {
    this.configrationForm();
  }

  configrationForm() {
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSave() {
    const values = this.form.value;
    this.user.add(values).subscribe(
      (data: any) => {
        console.log(data);
        this.successMsg = 'Registration successful! Redirecting to login...';
        this.errorMsg = null;

        setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 2000); // 
      },
      (error) => {
        console.error(error);
        this.successMsg = null;
        this.errorMsg = 'Registration failed. Please try again.';
      }
    );
  }
}
