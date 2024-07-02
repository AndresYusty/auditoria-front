import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.message = 'Login successful',
      error: (err) => this.message = `Login failed: ${err.error}`
    });
  }

  logout() {
    this.authService.logout(this.username, this.password).subscribe({
      next: () => this.message = 'Logout successful',
      error: (err) => this.message = `Logout failed: ${err.error}`
    });
  }
}
