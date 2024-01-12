import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'themes',
    component: MainComponent,
  },
  {
    path: 'themes/theme-content/:themeId',
    component: ThemeContentComponent,
  },
];
