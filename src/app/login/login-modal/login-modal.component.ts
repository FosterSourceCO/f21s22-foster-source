import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account-service/account.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { LoginRequest } from 'src/app/models/account.model';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from '../../services/toast-service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: true,
  });

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private authService: AuthService,
    private cookieService: CookieService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    return;
  }
  public loginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      localStorage.setItem('rememberUser', this.loginForm.get('remember')!.value);

      const data: LoginRequest = {
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
      };
      this.accountService.login(data).subscribe(
        (res: any) => {
          this.authService.setCookieOnDomain(res);
          const cookie = this.authService.getToken();
          if (cookie) {
            this.checkIfUserExists(cookie.Id);
          }
        },
        (err) => {
          this.toastService.httpError(err);
        }
      );
    }
  }
  public checkIfUserExists(id: string): void {
    this.accountService.getAccountById(id).subscribe(
      (response) => {
        this.router.navigate(['/respite']);
      },
      (err) => {
        this.router.navigate(['/login/create-account']);
      }
    );
  }
}
