import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CheckComponent } from './check/check.component';

const routes: Routes = [{ path: '', component: UserComponent},
      {
        path:'jokesh',
        component:CheckComponent
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
