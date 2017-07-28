import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

  employees =[
    {'name':'fazt',position:'manager'},
     {'name':'isaac',position:'manager'},
      {'name':'flor',position:'designer'},
       {'name':'pepe',position:'programer'},
        {'name':'tania',position:'prorammer'}
  ];

  model:any={};

  addEmployee():void{

  }

  deleteEmployee():void{

  }

  editEmployee():void{

  }

  updateEmployee():void{

  }

}
