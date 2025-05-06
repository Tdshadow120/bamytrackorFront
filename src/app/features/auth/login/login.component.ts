import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;  // Controls password visibility
  loading = false;      // Controls loading state
  loginError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.loginError = null;

    // Simulate API call
    setTimeout(() => {
      this.loading = false;

      // Replace this with actual authentication logic
      if (this.loginForm.value.username === 'demo' &&
        this.loginForm.value.password === 'demo') {
        console.log('Login successful!');
        // Add your navigation logic here
      } else {
        this.loginError = 'Invalid username or password';
      }
    }, 1500);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/56?text=No+Logo'; // Fallback visuel
  }
}
