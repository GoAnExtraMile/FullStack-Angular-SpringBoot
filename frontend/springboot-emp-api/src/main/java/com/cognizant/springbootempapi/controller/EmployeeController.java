package com.cognizant.springbootempapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
