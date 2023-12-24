package com.example.employeDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeDemo.model.Employee;

@Repository

public interface EmployeRepository extends JpaRepository<Employee,Long> {
	

}
