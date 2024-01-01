package com.corejava.guvitask;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCUtil {
	public static Connection getConnection() throws SQLException, IOException  {
		Connection connection;
		try {
		Properties prop = new Properties();
		
		prop.load(new FileInputStream("C:\\Users\\antan\\Documents\\workspace-spring-tool-suite-4-4.10.0.RELEASE/Guvi_JDBCProject/src/com/corejava/jdbc/application.properties"));
		
		System.out.println(prop.get("jdbc.username"));
		String username = (String) prop.get("jdbc.username");
		String password = (String) prop.get("jdbc.password");
		//Class.forName("com.mysql.jdbc.Driver");
		
		// Connection establishment
		connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Employee2", username, password);
		
		}catch(SQLException ex) {
			ex.printStackTrace();
			throw ex;
		}catch(IOException ex) {
			ex.printStackTrace();
			throw ex;
		}
		return connection;
		
	}

}
