import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';
import { MainComponent } from './main/main.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { ErrorComponent } from './core/error/error.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile-edit',
    component: ProfileEditComponent,
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
    path: 'themes/add-theme',
    component: AddThemeComponent,
  },
  {
    path: 'themes/theme-content/:themeId',
    component: ThemeContentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
