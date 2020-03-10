const db = require("../config/mysql");

exports.index = (req, res) => {
  tasks = [];
  db.connection.query("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    res.json({ tasks: rows });
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
  const { name, password, active } = req.body;
  let sql = `INSERT INTO users (title,description,isDone) VALUES (?,?,?)`;
  db.connection.query(
    sql,
    [req.body.name, req.body.password, req.body.active],
    (err, rows) => {
      if (err) throw err;
      res.status(200).json("task insertion success");
    }
  );
};

exports.update = (req, res) => {
  const { name, password, active } = req.body;
  let sql = `UPDATE users SET name = ?,password=?,active=? WHERE id=?`;
  db.connection.query(
    sql,
    [req.body.name, req.body.password, req.body.active, req.params.id],
    (err, rows) => {
      if (err) throw err;

      res.status(200).json(`se modifico la tarea id numero : ${req.params.id}`);
    }
  );
};

exports.delete = (req, res) => {
  db.connection.query(
    `DELETE FROM users WHERE id = ?`,
    [req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(`se borro correctamente la tarea ${req.params.id}`);
    }
  );
};