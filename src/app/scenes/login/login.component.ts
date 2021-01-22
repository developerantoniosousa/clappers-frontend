import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  login(): void {
    this.errorMessage = '';
    const credentials = this.form.value;
    if (credentials.username && credentials.password)
      this.authService.login(credentials).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        },
        err => {
          this.errorMessage = 'Usuário ou senha incorretos, tente novamente!';
          this.isLoginFailed = true;
        },
      );
    if (!credentials.username || !credentials.password) this.errorMessage = 'Dados inválidos!';
  }

  reloadPage(): void {
    this.router.navigateByUrl('/home');
  }
}
