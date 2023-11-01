import mysql from "mysql2";
import config from "../configs/database.js";

const connection = mysql.createConnection(config);

export default class ContactModel {
  constructor() {
    connection.connect(function (err) {
      if (err) throw err;
    });
  }

  // Tüm Kişiler
  getAllContacts(callback) {
    const sql = "SELECT * FROM contacts";
    connection.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, results);
    });
  }

  //Kişi Ekle
  createContact(newContact, callback) {
    const sql = "INSERT INTO contacts SET ?";
    connection.query(sql, newContact, function (err, results, fields) {
      callback(results.insertId);
    });
  }
}
