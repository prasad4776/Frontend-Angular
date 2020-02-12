import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from '../login.service';
import { appConfig } from '../../../validation/validation';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(appConfig.pattern.EMAIL)]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }
  login() {
    this.spinnerService.show();
    console.log("inside the  function")
    this.loginService.login(this.loginForm.value).subscribe((result: any) => {
      this.spinnerService.hide();
      console.log("what is the result", result)
      if (result.code === 200) {
        this.messageService.add({ severity: 'success', summary: result.message });
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('currentUser', JSON.stringify(result));
        localStorage.setItem('isLoggedin', 'true');
      }
      else if (result.code === 401) {
        this.messageService.add({ severity: 'error', summary: result.error });
      }
      else if (result.status === 403) {
        this.messageService.add({ severity: 'error', summary: result.alert });
      }
      else if (result.code === 404) {
        this.messageService.add({ severity: 'error', summary: result.message });
      }
    })


  }

}
