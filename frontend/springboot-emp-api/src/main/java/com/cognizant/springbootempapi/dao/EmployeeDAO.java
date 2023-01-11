package com.cognizant.springbootempapi.dao;

import java.util.List;

import com.cognizant.springbootempapi.model.Employee;

public interface EmployeeDAO {
	
	Employee save(Employee employee);
	
	Employee update(Employee employee, int id);
	
	int delete(int id);
	
	List<Employee> getAll();
	
	Employee getById(int id);
	
	Employee getByEmailId(String emailId);

}
