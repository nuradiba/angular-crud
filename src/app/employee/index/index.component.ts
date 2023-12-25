import { Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
  
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  
  employees: Employee[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public employeeService: EmployeeService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log('Before API')
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      console.log('Successfully access API')
      this.employees = data;
    })
    console.log('After API')
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteEmployee(id:number){
    this.employeeService.delete(id).subscribe(res => {
         this.employees = this.employees.filter(item => item.id !== id);
         console.log('Employee deleted successfully!');
    })
  }
  
}