package DIP;

public class PasswordReminder {
	
	private DBConnectionInterface dbConnection;
	
	public PasswordReminder(DBConnectionInterface dbConnection) {
		this.dbConnection = dbConnection;
	}

	public DBConnectionInterface getDbConnection() {
		return dbConnection;
	}

	public void setDbConnection(DBConnectionInterface dbConnection) {
		this.dbConnection = dbConnection;
	}
	
}