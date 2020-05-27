const Sequelize = require("sequelize");
const config = require("../config/config");
const db = new Sequelize(config);

db.query("show tables").then(
    data => {
        console.log(data);
        db.close();
    }
)