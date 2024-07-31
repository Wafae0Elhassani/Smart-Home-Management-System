package com.smarthome.devicesevice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.smarthome.devicesevice.repository")
public class DeviceSeviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeviceSeviceApplication.class, args);
	}

}
