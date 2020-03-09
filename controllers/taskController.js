const db = require("../config/mysql");

exports.index = (req, res) => {
    let sql = "SELECT id, title, description, is_done FROM tasks";

    db.connection.query(sql, (err, rows, fields) => {
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
        
    });
};

exports.show = (req, res) => {
    tasks = {
        name: "task" + req.params.id,
        description: "description task"
    };
    res.json({ tasks: tasks });
}

exports.store = (req, res) => {
    res.json()
}
