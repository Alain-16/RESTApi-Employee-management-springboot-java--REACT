package com.example.employeDemo.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeDemo.model.Employee;
import com.example.employeDemo.model.Scheduler;
import com.example.employeDemo.repository.EmployeRepository;
import com.example.employeDemo.repository.SchedulerRepository;

import jakarta.transaction.Transactional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeRepository empRepository;
    private final SchedulerRepository schedulerRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeRepository empRepository,SchedulerRepository schedulerRepository) {
        this.empRepository = empRepository;
        this.schedulerRepository=schedulerRepository;
    }

	@Override
    public List<Employee> getAllEmployees() {
        return empRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(long id) {
    	 Optional<Employee> employee = empRepository.findById(id);
         return employee.orElse(null);
    }

    @Override
    @Transactional
    public void saveEmployee(Employee employee) {
         empRepository.save(employee);
    }

    @Override
    public Employee updateEmployee(Employee newEmployee) {
            return empRepository.save(newEmployee);
        
    }

    @Override
    public void deleteEmployeeById(long id) {
        empRepository.deleteById(id);
    }
    
    @Override
    public void generateAndPersistRepeatingEvents(String title,String description, LocalDate start,LocalDate end,LocalTime startTime,LocalTime endTime, List<Integer> repeatingDays) {
	    LocalDate currentDate = start;
	    int daysBetween = (int) ChronoUnit.DAYS.between(start, end);

	    while (daysBetween >= 0) {
	        for (Integer dayOfWeek : repeatingDays) {
	            if (currentDate.getDayOfWeek().getValue() == dayOfWeek) {
	                // Create a new event instance for this date
	                Scheduler scheduler = new Scheduler(title, startTime, endTime, currentDate, description);
	                
	                // Save the event to the database
	                schedulerRepository.save(scheduler);
	            }
	        }
	        
	        // Move to the next day
	        currentDate = currentDate.plusDays(1);
	        daysBetween--;
	    }
    }
    

	  @Transactional
	    public void deleteEventsByTitle(String title) {
		  schedulerRepository.deleteByTitle(title);
	    }
	  
	  @Override
	  public Optional<Scheduler> getSchedulerById(Long id) {
		 return  schedulerRepository.findById(id);
		  
	  }
	  
	  @Override
	  public void saveEvents(Scheduler scheduler) {
		  schedulerRepository.save(scheduler);
	  }

   
    
   
}
