import { AccountService } from '../../services/account-service/account.service';
import { ToastService } from '../../services/toast-service/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAccountRequest } from '../../models/account.model';
import { FormUtils } from '../../common/utils/FormUtils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.scss'],
})
export class CreateAccountModalComponent implements OnInit {
  public readonly STATES;
  public readonly PHONE_TYPES;

  public createAccountForm: FormGroup;
  public disableSubmitButton = false;

  get confirmEmail() {
    return this.createAccountForm.get('confirmEmail');
  }

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService
  ) {
    this.STATES = FormUtils.STATES;
    this.PHONE_TYPES = FormUtils.getPhoneTypes();
  }

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      certExpiry: [null, Validators.compose([Validators.required, FormUtils.validateDate])],
      approvalResponsibility: [false, Validators.compose([Validators.required, Validators.requiredTrue])],
      confidentialInformation: [null, Validators.compose([Validators.required, Validators.requiredTrue])],
      potentialShareInfo: [null, Validators.compose([Validators.required, Validators.requiredTrue])],
    });
  }

  public createAccountSubmit(): void {
    if (this.createAccountForm.invalid) {
      this.createAccountForm.markAllAsTouched();
    } else {
      this.disableSubmitButton = true;
      const cookie = this.authService.getToken();
      console.log(cookie);
      if (!cookie) {
        console.log('Error with fetching cookie');
      } else {
        const createAccountReq: CreateAccountRequest = {
          id: cookie.Id,
          certExpiry: this.createAccountForm!.get('certExpiry')!.value,
        };
        this.accountService.createAccount(createAccountReq).subscribe(
          (res: CreateAccountRequest) => {
            this.router.navigate([`/login/complete-profile/`]);
          },
          (err) => {
            this.toastService.httpError(err);
            this.disableSubmitButton = false;
          }
        );
      }
    }
  }
}
