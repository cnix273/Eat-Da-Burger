// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
  // Select entire column from table.
  select: (tableName, callBack) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], (err, result) => {
          if (err) throw err;
            callBack(result);
      });
  },
  // Insert new row into table with given values.
  insert: (tableName, colNameOne, colNameTwo, valueOne, callBack) => {
      const queryString = "INSERT INTO ?? (??, ??) VALUES (?, false)";
      connection.query(queryString, [tableName, colNameOne, colNameTwo, valueOne], (err, result) => {
          if (err) throw err;
          callBack(result);
      });
  },
  // Udate column of table where condition is met.
  update: (tableName, colNameOne, colNameTwo, valueTwo, callBack) => {
      const queryString = "UPDATE ?? SET ?? = true WHERE ?? = ?";
      connection.query(queryString, [tableName, colNameOne, colNameTwo, valueTwo], (err, result) => {
          if (err) throw err;
          callBack(result);
      });
  },
  // Delete row from table where condition is met.
  delete: (tableName, colName, value, callBack) => {
    const queryString = "DELETE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableName, colName, value], (err, result) => {
        if (err) throw err;
        callBack(result);
    });
}
};

module.exports = orm;