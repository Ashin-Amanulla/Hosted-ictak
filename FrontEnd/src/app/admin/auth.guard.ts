import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroAdminService } from './hero-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAdmin!: boolean;

  constructor(private _auth: HeroAdminService, private _router: Router) { }

  canActivate() {

    if (this._auth.isAdmin()) {
      console.log("hello")
      return true;
    }
    else {
      this._router.navigate(['/admin']);
      return false;


    }

  }

}
