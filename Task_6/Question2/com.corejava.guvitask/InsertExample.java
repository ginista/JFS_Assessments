package com.corejava.guvitask;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class InsertExample {
	public static void main(String[] args) {
		try {
			Connection connection = JDBCUtil.getConnection();
			PreparedStatement ps = connection.prepareStatement(QueryConstants.INSERT_QUERY);
			ps.setString(1, "Jenny");
			ps.setInt(2,25);
			ps.setInt(3,10000);
			ps.addBatch();
			
			ps.setString(1, "Jacky");
			ps.setInt(2,30);
			ps.setInt(3,20000);
			ps.addBatch();
			
			ps.setString(1, "Joe");
			ps.setInt(2,20);
			ps.setInt(3,40000);
			ps.addBatch();
			
			ps.setString(1, "John");
			ps.setInt(2,40);
			ps.setInt(3,80000);
			ps.addBatch();
			
			ps.setString(1, "Shameer");
			ps.setInt(2,25);
			ps.setInt(3,90000);
			 ps.addBatch();
			connection.setAutoCommit(false);
			ps.executeBatch();
			connection.commit();
			System.out.println("Record inserted successfully");
		}
		catch(SQLException ex) {
			ex.printStackTrace();
		}
		catch(IOException ex) {
			ex.printStackTrace();
		}
	}

}
