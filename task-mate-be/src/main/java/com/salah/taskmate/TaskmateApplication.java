package com.salah.taskmate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class TaskmateApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskmateApplication.class, args);
	}
}
