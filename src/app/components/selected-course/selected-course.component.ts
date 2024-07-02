import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent
 {
  id1: string;
     
  constructor(private _route:Router,
               private _activatedRoute:ActivatedRoute)
  {}
  ngOnInit()
  {
    this._activatedRoute.snapshot.paramMap.get('id')
  }
onback() 
{
  this._route.navigate['/cource']
}
 }
