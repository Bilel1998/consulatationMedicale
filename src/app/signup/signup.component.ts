import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MustMatch } from '../validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  imagePreview!: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(12), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]],
      cPassword: [''],
      tel: ['', Validators.maxLength(8)],
      role: [''],
      image: ['']
    },
      {
        validator: MustMatch('password', 'cPassword')
      })
  }
  signUp(obj: any) {
    if (this.Medecin(obj.email)) {
      obj.role = "Medecin";
    }
    else {
      obj.role = "Patient";
    }
    console.log(obj);

    this.userService.signup(obj, this.signUpForm.value.image).subscribe(
      () => {
        console.log('added successfully');
        this.router.navigate(['']);

      }
    );

  }

  email(ch: string) {
    let res = "";
    var j = 0;
    for (let i = 1; i < ch.length; i++) {
      if (ch[i] === "@") {
        j = i;
        i = ch.length;
      }
    }
    for (var i = j + 1; i < ch.length; i++) {
      res = res + ch[i];
      if (ch[i + 1] == ".") {
        i = ch.length;
      }
    }
    return res;
  }
  Medecin(ch: string) {
    let T = ["gmail", "yahoo", "live", "outlook"];
    let res = this.email(ch);
    let b = true;
    for (let i = 0; i < T.length; i++) {
      if (T[i] == res) {
        b = false;
      }
    }
    return b;
  }
 
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('File',file);
    
    this.signUpForm.patchValue({ image: file });
    this.signUpForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; reader.readAsDataURL(file);
  }

}
  
