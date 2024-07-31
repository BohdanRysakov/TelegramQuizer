import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

//TODO: rework for auto reauth
export const AuthGuard: CanActivateFn = (route, state) => {
   return inject(AuthService).isLoggin() ? true : inject(Router).createUrlTree(['/notAuth']);
}