import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesComponent } from './componenents/directives/directives.component';
import { ParentComponent } from './componenents/parent/parent.component';
import { ChildComponent } from './componenents/child/child.component';
import { HomeComponent } from './componenets/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { ObservableComponent } from './components/observable/observable.component';
import { ChildcheckComponent } from './components/childcheck/childcheck.component';
import {HttpClientModule} from '@angular/common/http';
import { HittingurlComponent } from './components/hittingurl/hittingurl.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassComponent } from './components/class/class.component';
import { TemplatereferenceComponent } from './components/templatereference/templatereference.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { SwitchcaseComponent } from './components/switchcase/switchcase.component';
import { FormsModule } from '@angular/forms';
import { CheckingComponent } from './components/checking/checking.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { Home1Component } from './project/home1/home1.component';
import { Ngvigate1Component } from './components/ngvigate1/ngvigate1.component';
import { Ngnavigate2Component } from './coponents/ngnavigate2/ngnavigate2.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { Encapsulation2Component } from './components/encapsulation2/encapsulation2.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { XyentaComponent } from './components/xyenta/xyenta.component';
import { Xyenta1Component } from './components/xyenta1/xyenta1.component';
import { DirectiveDirective } from './directive.directive';
import { DirectiveComponent } from './components/directive/directive.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ObservableComponent,
    ChildcheckComponent,
    HittingurlComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassComponent,
    TemplatereferenceComponent,
    TwowayComponent,
    SwitchcaseComponent,
    CheckingComponent,
    SelectedCourseComponent,
    Home1Component,
    Ngvigate1Component,
    Ngnavigate2Component,
    EncapsulationComponent,
    Encapsulation2Component,
    ViewchildComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    XyentaComponent,
    Xyenta1Component,
    DirectiveDirective,
    DirectiveComponent,
    TestComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
