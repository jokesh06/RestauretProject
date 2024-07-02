import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent
 {
  courseId: number;
  id: any;
     constructor(private _course:ServiceService,
                  private _route:ActivatedRoute,
                  private _routes:Router)
      {}
     ngOnInit()
     {
      this._course.getcourse();
      this._route.paramMap.subscribe((params:ParamMap)=>
      this.courseId=parseInt(params.get('id'))
     )}
    courses=[
      {
        id:'1',
        name:'java',
        fee:'524'
      },
      {
        id:'2',
        name:'css',
        fee:'1475'
      },
      {
        id:'3',
        name:'html'
      }
    ]

    Onselect(course)
{
     this._routes.navigate(['/selected', course.id ]);
}
select(course)
{
  return course.id == this.courseId;
}
}



