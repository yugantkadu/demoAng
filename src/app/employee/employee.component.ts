import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = [];
  allEmployee: any;
  //allEmployee: {EmployeeId: number, EmployeeName: string, Age: number, City: string};
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  getAllEmployees(){
     this.employeeService.getAllEmployees().subscribe(data => {
      console.log(data);
      let emp: Employee;
      data.forEach((element) => {
        emp = {EmployeeID: element.DataID, EmployeeName: element.DataName, EmployeeAge: element.DataAge, EmployeeCity: element.DataCity};
        this.employee.push(emp);
      });
      console.log(this.employee);
      // Object.entries(data).forEach(
      //   ([key, value]) => emp = {
      //     EmployeeID: value[DataID],
      //   }
      // );
     });
  }

  getEmployeeById(id: number){
    this.employeeService.getEmployeeById(id).subscribe(data => {
      // console.log(data);
      this.allEmployee = data;
    });
 }

  updateEmployee(id: number, name: string, city: string, age: number){
    const emp = {EmployeeId: id, EmployeeName: name, city, age};
    this.employeeService.updateEmployee(emp).subscribe(data => {
      console.log('Successfull Update');
    });
 }

 deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id).subscribe(data => {
    console.log('Successfull Delete');
  });
 }

}
