import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  
  id!: number;
  employee!: Employee;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];
    this.employeeService.find(this.id).subscribe((data)=>{
      this.employee = data.data;
    }); 
        
    this.form = new FormGroup({
      employee_name: new FormControl('', [Validators.required]),
      employee_age: new FormControl('', Validators.required),
      employee_salary: new FormControl('', Validators.required)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.employeeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Employee updated successfully!');
         this.router.navigateByUrl('employee/index');
    })
  }
  
}