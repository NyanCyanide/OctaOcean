const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const ipaddr =  "127.0.0.1";
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: 'localhost',
  password: "admin123",
  database: "cloud_inventory",
});

// Performing CRUD Operations

// Creation of New Data : CREATE
app.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  db.query(
    `INSERT INTO cloud_inventory.messages (name, email, acknowledge, message) VALUES ("${name}", "${email}", false, "${message}")`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.post("/instancestore", (req, res) => {
  db.query(`INSERT INTO cloud_inventory.instances_users (name, email, phno, operatingsystem, ram, cpu, duration, purchasevalue, card) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.phno}', '${req.body.os}', '${req.body.ram}', '${req.body.cpu}', '${req.body.duration} hours', '${req.body.purchasevalue}', '${req.body.card}');
  `, (err, result) => {if(err) {
    console.log(err);
  }
else {
  res.send("Values inserted");
}})


})

app.post("/storagestore", (req, res) => {
  db.query(`INSERT INTO cloud_inventory.storage_users ( name, email, phno, storage, network, duration, purchasevalue, card) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.phno}", "${req.body.storage}", "${req.body.network}", "${req.body.duration} months", "${req.body.purchasevalue}", "${req.body.card}");`, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.log("Values inserted")
    }
  })
})

// Reading of Data : READ
app.get("/messages", (req, res) => {
  db.query(
    `SELECT * FROM cloud_inventory.messages WHERE acknowledge = 0`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/storagepurchase", (req, res) => {
  db.query(
    `SELECT * FROM cloud_inventory.storage_users;`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/instancespurchase", (req, res) => {
  db.query(
    `SELECT * FROM cloud_inventory.instances_users;`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.get("/osdata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.operating_system ORDER BY developer DESC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/ramdata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.ram_instances ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/cpudata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.cpu_instances ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/durationhourdata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.duration_hours ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/durationmonthdata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.duration_months ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/storagedata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.storage_instances ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/networkdata", (req, res) => {
    db.query(`SELECT * FROM cloud_inventory.network_speed ORDER BY value ASC;`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Deleting Data : DELETE
app.delete("/messagedelete/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `DELETE FROM cloud_inventory.messages WHERE (id = '${id}');`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Updating Data : UPDATE
app.put("/messageread", (req, res) => {
  const id = req.body.id;
  db.query(
    `UPDATE cloud_inventory.messages SET acknowledge = 1 WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Starting Server
app.listen(3001, () => {
  console.log(`Server Started : ${ipaddr}:3001`);
});
