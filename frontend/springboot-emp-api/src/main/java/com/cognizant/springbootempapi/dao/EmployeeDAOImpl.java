package com.cognizant.springbootempapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.springbootempapi.model.Employee;


@Repository
public class EmployeeDAOImpl implements EmployeeDAO {
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public int save(Employee employee) {
		return jdbcTemplate.update("INSERT INTO employee (fname, lname, email) values (?, ?, ?)",new Object[] { employee.getFname(), employee.getLname(), employee.getEmail()});
		
	}

	@Override
	public int update(Employee employee, int id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Employee> getAll() {
		return jdbcTemplate.query("SELECT * FROM employee", new BeanPropertyRowMapper<Employee>(Employee.class));
		 
	}

	@Override
	public Employee getById(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM employee WHERE id=?", new BeanPropertyRowMapper<Employee>(Employee.class), id);
	}

	
	
}
