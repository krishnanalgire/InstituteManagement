import { Component } from '@angular/core';
enum gender{
  male,
  female
}
interface employeeObj{
 id:number,
  name:string,
  position:string,
  salary:number,
  address:object,
  phonenumber:number,
  gender:gender,
  dataofbirth:Date,
  dataofjoining:Date,
  dataofresin:Date
}
const employee:employeeObj = { 
  id:1,
  name:"",
  position:"",
  salary:4,
  address:{},
  phonenumber:6,
  gender:gender.female,
  dataofbirth:new Date(),
  dataofjoining:new Date(),
  dataofresin:new Date()
 
}
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

}
