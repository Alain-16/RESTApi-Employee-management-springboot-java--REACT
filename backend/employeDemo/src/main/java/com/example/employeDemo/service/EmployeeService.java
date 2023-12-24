package com.example.employeDemo.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import com.example.employeDemo.model.Employee;
import com.example.employeDemo.model.Scheduler;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    Employee getEmployeeById(long id);

    void saveEmployee(Employee employee);
    void deleteEmployeeById(long id);
    Employee updateEmployee(Employee newEmployee); // New update method
    
    Optional<Scheduler> getSchedulerById(Long id);
    void saveEvents(Scheduler scheduler);
    void deleteEventsByTitle(String Title);
    void generateAndPersistRepeatingEvents(String title,String description, LocalDate start,LocalDate end,LocalTime startTime,LocalTime endTime, List<Integer> repeatingDays);
    
    
    
    
}
