package com.example.employeDemo;

import java.io.*;
import java.util.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

public class CsvToJson {
	
	public static void main(String[] args) {
		String csvFile = "/home/alain/Alain/trial.csv";
		String jsonFile="/home/alain/Alain/trial.json";
		
		CsvToJsonConverter(csvFile,jsonFile);
	}
	public static void CsvToJsonConverter(String csvFile, String jsonFile) {
		try {
			CsvMapper csvMapper = new CsvMapper();
			
			CsvSchema csvSchema = CsvSchema.builder().setUseHeader(true).build();
			
			List<Object> csvData = csvMapper.readerFor(Map.class)
                    .with(csvSchema)
                    .readValues(new File(csvFile))
                    .readAll();	
			
            ObjectMapper objectMapper = new ObjectMapper();

            // Write data to JSON file
            objectMapper.writerWithDefaultPrettyPrinter()
                    .writeValue(new File(jsonFile), csvData);

            System.out.println("Conversion completed successfully.");

		}catch (Exception e) {
            e.printStackTrace();
        }
		
		
	}

}
