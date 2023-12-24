package com.example.employeDemo.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employeDemo.model.Scheduler;

public interface SchedulerRepository extends JpaRepository<Scheduler,Long>{
	void deleteByTitle(String title);
	
}
