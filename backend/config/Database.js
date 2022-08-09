import {Sequelize} from "sequelize";
// nama database
const db = new Sequelize('crud_db_js','root','root', {
        host:'localhost',
        port:8889,
        dialect :'mysql'
});

export default db;


