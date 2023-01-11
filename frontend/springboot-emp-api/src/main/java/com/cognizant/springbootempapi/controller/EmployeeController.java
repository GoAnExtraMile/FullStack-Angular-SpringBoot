package com.cognizant.springbootempapi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin
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
	
	// Get Employee By Id
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee = empDao.getById(id);
		return ResponseEntity.ok(employee);
		//return empDao.getById(id);
	}
	
	// Create Employee
	
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee employee) {
		 //return empDao.save(employee) + " number of records saved to the database.";
		return empDao.save(employee);
	}
	
	// Update Employee 
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
		 //return empDao.update(employee, id) + " number of records updated to the database.";
		return ResponseEntity.ok(empDao.update(employee, id)); 
	}
	
	// Delete Employee
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable int id) {				
		String str = empDao.delete(id) + " number of records deleted from database.";
		Map<String, Boolean> response = new HashMap<>();
		response.put(str, Boolean.TRUE);
		return ResponseEntity.ok(response);
		//return ResponseEntity.ok((empDao.delete(id) + " number of records deleted from database."));
	}
}
