package com.example.employeDemo.service;

import java.util.List;

import com.example.employeDemo.model.Payroll;

public interface PayrollService{
    List<Payroll> getAllPayrolls();
    Payroll getPayrollById(Long id);
    void savePayroll(Payroll payroll);
    Payroll updatePayroll(Payroll payroll);
    void deletePayrollById(Long id);
	
}