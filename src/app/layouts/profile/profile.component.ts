import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() {}
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    lastName: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    birthday: new FormControl(''),
    mobileNum: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(20), Validators.minLength(10)]),
    city: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    state: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    address: new FormControl('', [Validators.minLength(5)]),
    zip: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(8)]),
  })
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.minLength(8)])
  });
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = this.changePasswordForm.get('newPassword')!.value;
      const confirmPassword = this.changePasswordForm.get('confirmPassword')!.value;
  
      if (newPassword !== confirmPassword) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }
  ngOnInit() {
    this.changePasswordForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator());
  }
  editProfile() {
    console.log(this.profileForm.value)
  }
  changePassword() {
    console.log(this.changePasswordForm.value)
  }
}