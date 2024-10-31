import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationRoutes } from './const/application-routes';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: ApplicationRoutes.Register,
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: ApplicationRoutes.Login,
    component: LoginComponent,
    title: 'Login',
  },
  { path: '**', component: HomeComponent },
];
