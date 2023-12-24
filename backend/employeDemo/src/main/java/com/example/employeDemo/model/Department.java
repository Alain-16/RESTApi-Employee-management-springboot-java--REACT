package com.example.employeDemo.model;

import jakarta.persistence.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="department")
public class Department {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="dp_id")
	private Long id;
	
	@Column(name="department")
	private String departmentName;
	
	@Column(name="department_head")
	private String departmentHead;
	
	@Column(name="total_employee")
	private int totalEmployee;
	
	@OneToMany(mappedBy="empDepart")
	@JsonIgnoreProperties("empDepart")
	private List<Employee> employ = new ArrayList<>();
	
	public Department(long id) {
	this.id=id;
		
	}

	public Department() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String depart) {
		this.departmentName = depart;
	}

	public List<Employee> getEmploy() {
		return employ;
	}

	public void setEmploy(List<Employee> employ) {
		this.employ = employ;
	}

	public String getDepartmentHead() {
		return departmentHead;
	}

	public void setDepartmentHead(String departmentHead) {
		this.departmentHead = departmentHead;
	}

	public int getTotalEmployee() {
		return totalEmployee;
	}

	public void setTotalEmployee(int totalEmployee) {
		this.totalEmployee = totalEmployee;
	}
	
	

	
}
