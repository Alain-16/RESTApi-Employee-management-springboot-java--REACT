package com.example.employeDemo.model;




import java.util.Date;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "emp_id")
	private long id;
	
	@Column(name = "emp_first_name")
	private String fname;

	@Column(name = "emp_last_name")
	private String lname;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "dateofbirth")
	private Date dateofbirth;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="email")
	private String email;
	
	@Column(name="phonenumber")
	private int phonenumber;
	
	@Column(name="jobtitle")
	private String jobtitle;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="emp_depart_dp_id")
	@JsonIgnoreProperties("employ")
	private Department empDepart;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "hiredate")
	private Date hiredate;

	@Column(name="status")
	private String status;
	
	
	public Employee(long l, String fname, String lname,Date dateofbirth,String gender,String email,int phonenumber,String jobtitle,Department depart,Date hiredate,String status) {
		this.id = l;
		this.fname = fname;
		this.lname = lname;
		this.dateofbirth=dateofbirth;
		this.gender=gender;
		this.email=email;
		this.phonenumber=phonenumber;
		this.jobtitle=jobtitle;
		this.empDepart=depart;
		this.hiredate=hiredate;
		this.status=status;
	}
	
	public Employee() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Date getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(Date dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(int phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getJobtitle() {
		return jobtitle;
	}

	public void setJobtitle(String jobtitle) {
		this.jobtitle = jobtitle;
	}

	public Date getHiredate() {
		return hiredate;
	}

	public void setHiredate(Date hiredate) {
		this.hiredate = hiredate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Department getEmpDepart() {
		return empDepart;
	}

	public void setEmpDepart(Department empDepart) {
		this.empDepart = empDepart;
	}

}
