import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';
  msg:string="";

  employees =[
    {'name':'fazt',position:'manager',email:''},
     {'name':'isaac',position:'manager',email:''},
      {'name':'flor',position:'designer',email:''},
       {'name':'pepe',position:'programer',email:''},
        {'name':'tania',position:'prorammer',email:''}
  ];

    employees2 =[];

  model:any={};
  model2:any={};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg="Campo Agregado";
    this.model={};
  }

  deleteEmployee(i):void{
      var answer = confirm('estas seguro de eliminar?');
      if(answer){
        this.employees.splice(i,1)
        this.msg="Campo Eliminado";
      }
  }

  myvalue;
  editEmployee(i):void{
   this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
     this.model2.email = this.employees[i].email;         
     this.myvalue = i;
     this.hideUpdate = false;
  }

  updateEmployee():void{
      console.log(this.model2)
      let i = this.myvalue;
      for(let j=0 ; j<this.employees.length;j++){
        if(i==j){
          this.employees[i] = this.model2;
          this.msg="Campo Actualizado";
          this.hideUpdate = true;
        }
      }
      this.model2={};
  }

  closeAlert():void{
    this.msg="";
  }
}
