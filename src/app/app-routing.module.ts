import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { TeenPrincipalComponent } from './components/teen/teen-principal/teen-principal.component';
import {TeenFormComponent} from "./components/teen/teen-form/teen-form.component";
import {
  AsignationPrincipalComponent
} from "./components/asignation/asignation-principal/asignation-principal.component";
import {AsignationFormComponent} from "./components/asignation/asignation-form/asignation-form.component";
import {
  FuncionaryPrincipalComponent
} from "./components/funcionary/funcionary-principal/funcionary-principal.component";
import { FuncionaryFormComponent } from './components/funcionary/funcionary-form/funcionary-form.component';
import { BulkAllocationComponent } from './components/bulk-allocation/components/bulk-allocation/bulk-allocation.component';
import { AttendanceComponent } from './components/attendance/components/attendance/attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/components/view-attendance/view-attendance.component';
import { permissionsGuard } from './components/guards/permissions.guard';
import { CheckInComponent } from './components/check-in/components/check-in/check-in.component';
import { WelcomePrincipalComponent } from './components/welcome/welcome-principal/welcome-principal/welcome-principal.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"welcome", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent, canActivate: [permissionsGuard]},
      {path:"asignation", component: AsignationPrincipalComponent, canActivate: [permissionsGuard]},
      {path:"forms", component:FormsComponent, canActivate: [permissionsGuard]},
      {path:"teen", component:TeenPrincipalComponent, canActivate: [permissionsGuard]},
      {path:"grid-list", component:GridListComponent, canActivate: [permissionsGuard]},
      {path:"menu", component:MenuComponent, canActivate: [permissionsGuard]},
      {path:"tabs", component:TabsComponent, canActivate: [permissionsGuard]},
      {path:"expansion", component:ExpansionComponent, canActivate: [permissionsGuard]},
      {path:"chips", component:ChipsComponent, canActivate: [permissionsGuard]},
      {path:"progress", component:ProgressComponent, canActivate: [permissionsGuard]},
      {path:"toolbar", component:ToolbarComponent, canActivate: [permissionsGuard]},
      {path:"progress-snipper", component:ProgressSnipperComponent, canActivate: [permissionsGuard]},
      {path:"snackbar", component:SnackbarComponent, canActivate: [permissionsGuard]},
      {path:"slider", component:SliderComponent, canActivate: [permissionsGuard]},
      {path:"slide-toggle", component:SlideToggleComponent, canActivate: [permissionsGuard]},
      {path:"tooltip", component:TooltipsComponent, canActivate: [permissionsGuard]},
      {path:"button", component:ButtonsComponent, canActivate: [permissionsGuard]},
      {path:"teen-form", component: TeenFormComponent, canActivate: [permissionsGuard]},
      {path:"asignation-form", component: AsignationFormComponent, canActivate: [permissionsGuard]},
      {path:"funcionary", component: FuncionaryPrincipalComponent, canActivate: [permissionsGuard]},
      {path: "funcionary-form", component: FuncionaryFormComponent, canActivate: [permissionsGuard]},
      {path: "bulk-Allocation", component: BulkAllocationComponent, canActivate: [permissionsGuard]},
      {path: "attendance", component: AttendanceComponent, canActivate: [permissionsGuard]},
      {path: "view-attendance", component: ViewAttendanceComponent, canActivate: [permissionsGuard]},
      {path: "check-in", component: CheckInComponent},
      { path: "welcome", component: WelcomePrincipalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
