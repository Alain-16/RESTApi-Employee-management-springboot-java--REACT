package com.example.employeDemo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
	
	public void addCorsMappings(CorsRegistry registry) {
	    registry.addMapping("/**")
        .allowedOrigins("http://localhost:3000") // Adjust the origin to match your front-end URL
        .allowedMethods("GET", "POST", "PUT", "DELETE")
	    .allowedHeaders("Authorization", "Content-Type")
        .exposedHeaders("Custom-Header")
        .allowCredentials(true)
        .maxAge(3600); // 1 hour
		
	}

}
