package com.example.employeDemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeDemo.model.Payroll;
import com.example.employeDemo.repository.PayrollRepository;

@Service
public class PayrollServiceImpl implements PayrollService{
	
	  private final PayrollRepository payrollRepository;

	    @Autowired
	    public PayrollServiceImpl(PayrollRepository payrollRepository) {
	        this.payrollRepository = payrollRepository;
	    }

	    @Override
	    public List<Payroll> getAllPayrolls() {
	        return payrollRepository.findAll();
	    }

	    @Override
	    public Payroll getPayrollById(Long id) {
	        Optional<Payroll> payroll = payrollRepository.findById(id);
	        return payroll.orElse(null);
	    }

	    @Override
	    public void savePayroll(Payroll payroll) {
	    	payrollRepository.save(payroll);
	    }

	    @Override
	    public Payroll updatePayroll(Payroll payroll) {
	    	return payrollRepository.save(payroll);
	    }

	    @Override
	    public void deletePayrollById(Long id) {
	    	payrollRepository.deleteById(id);
	    }
	
}