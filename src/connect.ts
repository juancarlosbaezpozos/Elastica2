import { MongoClient, Db } from "mongodb";

export default async function (): Promise<Db> {
    var contrasenia = encodeURIComponent('LNE6iwRk3mb66M8O8bvIpD9nzTx9D5c0fDRGsFw91F8n3L3tfZ7gCmIfvfP5XnoLrLxFrzuFVVXqhbPvF38PgQ==');
    const uri = "mongodb://poco:" + contrasenia + "@poco.documents.azure.com:10255/?ssl=true";
    return await MongoClient.connect(uri);
};

/*import { Db } from "mongodb";
const mongoClient = require("mongodb").MongoClient;
let database = null;

export default async function (): Promise<Db> {
    return await new mongoClient('mongodb://poco.documents.azure.com:10255/?ssl=true', {
        auth: {
            user: 'poco',
            password: 'LNE6iwRk3mb66M8O8bvIpD9nzTx9D5c0fDRGsFw91F8n3L3tfZ7gCmIfvfP5XnoLrLxFrzuFVVXqhbPvF38PgQ==',
        }
    }).connect(
        (err, db) => {
            if (err) {
                db.close();
                return console.error(err);
            } else {
                console.log('conectado');
                database = db.db('test');
            }
        });
};*/

