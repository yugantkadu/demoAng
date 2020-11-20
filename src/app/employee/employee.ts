export class Employee{
  EmployeeID: number;
  EmployeeName: string;
  EmployeeCity: string;
  EmployeeAge: number;   
  
 
  // Employee is one Module 
  // Data Received and Send only in the Form of the Object
  // That's Why we need to create a module . 
  // This is Constructor.....
  

  constructor(){
    this.EmployeeID = 0;
    this.EmployeeName = '';
    this.EmployeeAge = 0;
    this.EmployeeCity = '';
  }
}
