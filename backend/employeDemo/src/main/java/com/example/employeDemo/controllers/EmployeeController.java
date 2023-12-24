package com.example.employeDemo.controllers;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import com.example.employeDemo.model.Department;
import com.example.employeDemo.model.Employee;
import com.example.employeDemo.model.Payroll;
import com.example.employeDemo.model.Scheduler;
import com.example.employeDemo.model.SchedulerEventDto;
import com.example.employeDemo.repository.SchedulerRepository;
import com.example.employeDemo.service.DepartmentService;
import com.example.employeDemo.service.EmployeeService;
import com.example.employeDemo.service.PayrollService;

@RestController
@RequestMapping("/api/employees/")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final DepartmentService departmentService;
    private final PayrollService payrollService;
    
    @Autowired
    private SchedulerRepository schedulerRep;
    
    @Autowired
    public EmployeeController(EmployeeService employeeService, DepartmentService departmentService, PayrollService payrollService) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.payrollService=payrollService;
        
    }

    @RequestMapping(value="/listEmployee",method=RequestMethod.GET)
    public List<Employee> showEmployees() {
        return employeeService.getAllEmployees(); // Make sure this view exists
    }		
    
    @RequestMapping(value="/listDepartments",method=RequestMethod.GET)
    public List<Department> showDepartments(){
    	return departmentService.getAllDepartments();
    }
    
    @RequestMapping(value="/employeById/{id}",method=RequestMethod.GET)
    public Employee getEmployeById(@PathVariable(value="id") Long id){
    	return employeeService.getEmployeeById(id);
    }
    
    @RequestMapping(value="/createEmployee", method=RequestMethod.POST)
    public void saveRegister(@RequestBody  Employee employee) {
    	System.out.println("============"+employee.getEmpDepart().getId());
         employeeService.saveEmployee(employee);
        
    }
    
    @RequestMapping(value="/updateEmploye/{id}",method=RequestMethod.PUT)
    public Employee updateEmployee(@RequestBody Employee employe) {
    	return employeeService.updateEmployee(employe);
    }
    
  @RequestMapping(value="/deleteEmploye/{id}",method=RequestMethod.DELETE)
  public void deleteEmploye(@PathVariable(value="id") Long id) {
	  employeeService.deleteEmployeeById(id);
	  
  }
  @RequestMapping(value="/createDepartment", method=RequestMethod.POST)
  public void saveRegister(@RequestBody  Department department) {
       departmentService.saveDepartment(department);
      
  }
  
  @RequestMapping(value="/createPayroll", method=RequestMethod.POST)
  public void savePayroll(@RequestBody  Payroll payroll) {
       payrollService.savePayroll(payroll);
      
  }
  
  @RequestMapping(value="/listPayroll",method=RequestMethod.GET)
  public List<Payroll> showPayrolls(){
  	return payrollService.getAllPayrolls();
  }
  
  @RequestMapping(value="/departmentById/{id}",method=RequestMethod.GET)
  public Department getDepartmentById(@PathVariable(value="id") Long id){
  	return departmentService.getDepartmentById(id);
  }
  
  @RequestMapping(value="/updateDepartment/{id}",method=RequestMethod.PUT)
  public Department updateDepartment(@RequestBody Department department) {
  	return departmentService.updateDepartment(department);
  }
  
  @RequestMapping(value="/deleteDepartment/{id}",method=RequestMethod.DELETE)
  public void deleteDepartment(@PathVariable(value="id") Long id) {
	  departmentService.deleteDepartmentById(id);
	  
  }
  
  @RequestMapping(value="/payrollById/{id}",method=RequestMethod.GET)
  public Payroll getPayrollById(@PathVariable(value="id") Long id){
  	return payrollService.getPayrollById(id);
  }
  
  @RequestMapping(value="/updatePayroll/{id}",method=RequestMethod.PUT)
  public Payroll updatePayroll(@RequestBody Payroll payroll) {
  	return payrollService.updatePayroll(payroll);
  }
  
  @RequestMapping(value="/deletePayroll/{id}",method=RequestMethod.DELETE)
  public void deletePayroll(@PathVariable(value="id") Long id) {
	  payrollService.deletePayrollById(id);
	  
  }
  
  @RequestMapping(value="/createEvent", method=RequestMethod.POST)
  public void createEvent(Scheduler scheduler, Model model) {
	  employeeService.generateAndPersistRepeatingEvents(scheduler.getTitle(),
			   scheduler.getDescription(),
			   scheduler.getStartDate(),
			   scheduler.getEndDate(),
			   scheduler.getStart(),
			   scheduler.getEnd(),
			   scheduler.getDaysOfWeek()
			  );
	  model.addAttribute("scheduler",scheduler);
  };
  
  @RequestMapping(value="/allevent",method=RequestMethod.GET)
  public List<SchedulerEventDto> getAllSchedules(){
	    	List<Scheduler> schedulerList = schedulerRep.findAll();
	    	
	    	List<SchedulerEventDto> schedulers = new ArrayList<>();
	    	for (Scheduler scheduler : schedulerList) {
	            SchedulerEventDto event = new SchedulerEventDto();
	            event.setId(String.valueOf(scheduler.getId()));
	            event.setTitle(scheduler.getTitle());
	            event.setStart(scheduler.getSchedulerDate().toString() + "T" + scheduler.getStart().toString());
	            event.setEnd(scheduler.getSchedulerDate().toString() + "T" + scheduler.getEnd().toString());
	            schedulers.add(event);
	    	}
	    	return schedulers;
	    }
	 	
  


}
