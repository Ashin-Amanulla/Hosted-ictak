import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HeroAdminService } from '../../hero-admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _heroService: HeroAdminService,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  Login: any = new FormGroup({
    'email': new FormControl(''),
    'password':new FormControl('')
  })

  login(){
    let loginData = this.Login.value;
console.log("test login")
    this._heroService.loginCheck(loginData)
    .subscribe(res => {
      let result = res;

          if (result.accessToken) {
            //local storage
            localStorage.setItem('accessToken', result.accessToken)
              Swal.fire({
          icon: 'success',
          title: '  Logged In!',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            this._router.navigate(['/admin/dashboard'])
          })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Network Error, Please try after sometime',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this._router.navigate(['/'])
        })
      }
    })
  }
}
