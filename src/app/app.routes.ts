import { Routes } from '@angular/router';
  
import { IndexComponent } from './employee/index/index.component';
import { ViewComponent } from './employee/view/view.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
  
export const routes: Routes = [
      { path: 'employee', redirectTo: 'employee/index', pathMatch: 'full'},
      { path: 'employee/index', component: IndexComponent },
      { path: 'employee/:employeeId/view', component: ViewComponent },
      { path: 'employee/create', component: CreateComponent },
      { path: 'employee/:employeeId/edit', component: EditComponent } 
  ];