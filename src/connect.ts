import { MongoClient, Db } from "mongodb";

export default async function (): Promise<Db> {
    var contrasenia = encodeURIComponent('LNE6iwRk3mb66M8O8bvIpD9nzTx9D5c0fDRGsFw91F8n3L3tfZ7gCmIfvfP5XnoLrLxFrzuFVVXqhbPvF38PgQ==');
    const uri = "mongodb://poco:" + contrasenia + "@poco.documents.azure.com:10255/?ssl=true";
    return await MongoClient.connect(uri);
};