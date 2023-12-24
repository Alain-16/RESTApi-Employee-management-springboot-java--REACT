package com.example.employeDemo.model;

import java.time.LocalDate;

import java.time.LocalTime;
import java.util.List;

import org.springframework.data.annotation.Transient;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="scheduler")
public class Scheduler {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="id")
		private long id;
		
	
		@Column(name="title")
	    private String title;
		
		@Column(name="description")
		private String description;
		
		@Column(name="startTime")
		@DateTimeFormat(pattern="HH:mm")
	    private LocalTime startTime;
		
		@Column(name="endTime")
		@DateTimeFormat(pattern="HH:mm")
	    private LocalTime endTime;
		
		@Transient
	    private LocalDate startDate;
		
		@Transient
	    private LocalDate endDate;
		
		@Column(name = "scheduler_Date")
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private LocalDate schedulerDate;
		
		
		@Transient
		private List<Integer> daysOfWeek;
		
	

		public Scheduler(String title, LocalTime startTime, LocalTime endTime,LocalDate scheduleDate,String description) {
	    	super();
	    	this.title=title;
	    	this.startTime=startTime;
	    	this.endTime=endTime;	    	
	    	this.schedulerDate=scheduleDate;
	    	this.description=description;	    	
		}
		
	
		public Scheduler() {
			super();
	    	
	    }
		
	    	public long getId() {
			return id;
		}
	    	

		public void setId(long id) {
			this.id = id;
		}
	    
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		
		

		public LocalTime getStart() {
			return startTime;
		}

		public void setStart(LocalTime start) {
			this.startTime = start;
		}

		public LocalTime getEnd() {
			return endTime;
		}

		public void setEnd(LocalTime end) {
			this.endTime = end;
		}

		

		public LocalDate getStartDate() {
			return startDate;
		}

		public void setStartDate(LocalDate startDate) {
			this.startDate = startDate;
		}

		public LocalDate getEndDate() {
			return endDate;
		}

		public void setEndDate(LocalDate endDate) {
			this.endDate = endDate;
		}
		
		public LocalDate getSchedulerDate() {
			return schedulerDate;
		}

		public void setSchedulerDate(LocalDate schedulerDate) {
			this.schedulerDate = schedulerDate;
		}


		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public List<Integer> getDaysOfWeek() {
			return daysOfWeek;
		}

		public void setDaysOfWeek(List<Integer> daysOfWeek) {
			this.daysOfWeek = daysOfWeek;
		}
}
