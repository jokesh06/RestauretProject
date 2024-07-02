import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './componenents/child/child.component';
import { ParentComponent } from './componenents/parent/parent.component';
import { HomeComponent } from './componenets/home/home.component';
import { ObservableComponent } from './components/observable/observable.component';
import { adminAccessGuard } from './guards/admin-access.guard';
import { ChildcheckComponent } from './components/childcheck/childcheck.component';
import { HittingurlComponent } from './components/hittingurl/hittingurl.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { TemplatereferenceComponent } from './components/templatereference/templatereference.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { SwitchcaseComponent } from './components/switchcase/switchcase.component';
import { CheckingComponent } from './components/checking/checking.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { Home1Component } from './project/home1/home1.component';
import { Ngvigate1Component } from './components/ngvigate1/ngvigate1.component';
import { Ngnavigate2Component } from './coponents/ngnavigate2/ngnavigate2.component';

const routes: Routes = [
  {
     path:'',
     redirectTo:"url",
     pathMatch:"full"
  },
   {
    path:"child",
    component:ParentComponent
   },
  {
    path:"parent",
    component:ChildComponent,
    canActivateChild:[adminAccessGuard],
    children:[{path:"fee",
              component:ChildcheckComponent}]
  },
   

   {
     path:"home",
     canActivate:[adminAccessGuard],
     component:HomeComponent
   },
   {
    path:"ng",
    component:TwowayComponent
  },
   {
     path:"prop",
     component:PropertyBindingComponent
   },
   {
     path:'tel',
     component:Ngnavigate2Component
   },
   {
      path:'lol',
      component:Ngvigate1Component  
   }
,
   {
     path:"url",
     component:HittingurlComponent
   },
   {
     path:"template",
    component:TemplatereferenceComponent

  },
   {
     path:"obs",
     component:ObservableComponent
   },
  {
    path:"check",
    component:CheckingComponent
   },
   {
       path:"switch",
       component:SwitchcaseComponent
    },
    {
       path:'selected/:id',
       component:SelectedCourseComponent
  },
  {
       path:"str",
       component:StringInterpolationComponent
   },
  {
    path:'main',
    component:Home1Component
  },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

