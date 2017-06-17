import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const appRouters: Routes = [
  { path: '', component: ListComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ListComponent }
];

export const routing = RouterModule.forRoot(appRouters);
