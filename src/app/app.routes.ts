import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { MembersComponent } from './pages/members/members';
import { TrainersComponent } from './pages/trainers/trainers';
import { PlansComponent } from './pages/plans/plans';
import { ClassesComponent } from './pages/classes/classes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'classes', component: ClassesComponent
 }
];