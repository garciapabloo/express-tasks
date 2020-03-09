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
    const { title, description, is_done = false } = req.body;
    if(title && description) {
        db.connection.query(
            `INSERT INTO tasks ( title, description, is_done )
            VALUES ('${title}', '${description}', ${is_done})`,
            (err, row) => {
                if (err) {
                    res
                        .status(500)
                        .json({ message: "Error al insertar los datos: " + err });
                    throw err;
                    }
                    console.log(row);
                    res.json({ message: `tarea creada con id ${row.insertId}` });                    
            }
        );
    }
};
