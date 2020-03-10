const db = require("../config/mysql");

exports.index = (req, res) => {
  users = [];
  db.connection.query("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    res.json({ users: rows });
  });
};

exports.show = (req, res) => {
  tasks = [];
  db.connection.query(
    `SELECT * FROM users WHERE id= ?`,
    [req.params.id],
    (err, rows) => {
      if (err) throw err;

      if (!rows[0]) {
        res.status(404).json({ tasks: {} });
        return;
      }

      res.json({ tasks: rows[0] });
    }
  );
};

exports.store = (req, res) => {
//  const { email, password, admin } = req.body;
  let sql = `INSERT INTO users (email, password, admin) VALUES (?,?,?)`;
  db.connection.query(
    sql,
    [req.body.email, req.body.password, req.body.admin],
    (err, rows) => {
      if (err) throw err;
      res.status(200).json("user insertion success");
    }
  );
};

exports.update = (req, res) => {
  let sql = `UPDATE users SET email = ?,password=?,admin=?, WHERE id=?`;
  db.connection.query(
    sql,
    [req.body.name, req.body.password, req.body.active, req.params.id],
    (err, rows) => {
      if (err) throw err;

      res.status(200).json(`se modifico el usuario id numero : ${req.params.id}`);
    }
  );
};

exports.delete = (req, res) => {
  db.connection.query(
    `DELETE FROM users WHERE id = ?`,
    [req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(`se borro correctamente el usuario ${req.params.id}`);
    }
  );
};