package com.cognizant.springbootempapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springbootempapi.dao.EmployeeDAO;
import com.cognizant.springbootempapi.model.Employee;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeDAO empDao;
	
	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return empDao.getAll();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		return empDao.getById(id);
	}
	
	@PostMapping("/employees")
	public String saveEmployee(@RequestBody Employee employee) {
		 return empDao.save(employee) + " number of records saved to the database.";
	}
}
