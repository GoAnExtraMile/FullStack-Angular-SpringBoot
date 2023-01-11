package com.cognizant.springbootempapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.cognizant.springbootempapi.exception.ResourceNotFoundException;
import com.cognizant.springbootempapi.model.Employee;


@Repository
public class EmployeeDAOImpl implements EmployeeDAO {
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public List<Employee> getAll() {
		return jdbcTemplate.query("SELECT * FROM employee", new BeanPropertyRowMapper<Employee>(Employee.class));
	}
	
	@Override
	public Employee getById(int id) {
		try {
			return jdbcTemplate.queryForObject("SELECT * FROM employee WHERE id=?", new BeanPropertyRowMapper<Employee>(Employee.class), id);
		} catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Employee with id : " + id + " doesn't exist!");
		}
	}
	
	@Override
	public Employee getByEmailId(String emailId) {
		try {
			return jdbcTemplate.queryForObject("SELECT * FROM employee WHERE email_id=?", new BeanPropertyRowMapper<Employee>(Employee.class), emailId);
		} catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Employee with Email Id : " + emailId + " doesn't exist!");
		}
	}
	
	
	@Override
	public Employee save(Employee employee) {
		String email = employee.getEmailId();
		Employee emp;
		int result = jdbcTemplate.update("INSERT INTO employee (first_name, last_name, email_id) values (?, ?, ?)",new Object[] { employee.getFirstName(), employee.getLastName(), employee.getEmailId()});
		if (result != 0) { 
			emp = getByEmailId(email);
			return emp;
		} else
			return null;
				
		//return jdbcTemplate.update("INSERT INTO employee (first_name, last_name, email_id) values (?, ?, ?)",new Object[] { employee.getFirstName(), employee.getLastName(), employee.getEmailId()});
		
	}

	@Override
	public Employee update(Employee employee, int id) {
		
		Employee emp = getById(id);
		jdbcTemplate.update("UPDATE employee SET first_name=?, last_name=?, email_id=? WHERE id=?", new Object[] {employee.getFirstName(), employee.getLastName(), employee.getEmailId(), id});
		emp = getById(id);
		return emp;
		
		//return jdbcTemplate.update("UPDATE employee SET first_name=?, last_name=?, email_id=? WHERE id=?", new Object[] {employee.getFirstName(), employee.getLastName(), employee.getEmailId(), id});
		
	}

	@Override
	public int delete(int id) {
		Employee emp = getById(id);
		int i = jdbcTemplate.update("DELETE FROM employee WHERE id=?", id);
		return i;
	}
}
