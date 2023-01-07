package com.cognizant.springbootempapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springbootempapi.dao.EmployeeDAO;
import com.cognizant.springbootempapi.model.Employee;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	private EmployeeDAO empDao;
	
	// Get All Employees
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
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
	
	@PutMapping("/employees/{id}")
	public String updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
		 return empDao.update(employee, id) + " number of records updated to the database.";
	}
	
	@DeleteMapping("/employees/{id}")
	public String deleteEmployeeById(@PathVariable int id) {
		return empDao.delete(id) + " number of records deleted from database.";
	}
}
