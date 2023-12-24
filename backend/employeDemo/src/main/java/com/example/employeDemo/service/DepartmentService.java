package com.example.employeDemo.service;

import java.util.List;

import com.example.employeDemo.model.Department;

public interface DepartmentService {
    List<Department> getAllDepartments();
    Department getDepartmentById(Long id);
    void saveDepartment(Department department);
    Department updateDepartment(Department department);
    void deleteDepartmentById(Long id);
}
