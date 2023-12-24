import { Component } from '@angular/core';
  
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  
  id!: number;
  employee!: Employee;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];
          
    this.employeeService.find(this.id).subscribe((data: Employee)=>{
      this.employee = data;
    });
  }
  
}