package com.example.employeDemo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeDemo.model.Payroll;

@Repository
public interface PayrollRepository extends JpaRepository<Payroll,Long>{
	
}