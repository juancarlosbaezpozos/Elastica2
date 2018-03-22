import { ObjectID } from "mongodb";
import { ODataServer, ODataController, Edm, odata, ODataQuery } from "odata-v4-server";
import { ProductsController, CategoriesController } from "./controller";
import connect from "./connect";
import { Category } from "./model";
import categories from "./categories";
import products from "./products";

@odata.cors
@odata.namespace("Northwind")
@odata.controller(ProductsController, true)
@odata.controller(CategoriesController, true)
export class NorthwindServer extends ODataServer {
    @Edm.ActionImport
    async initDb() {
        const db = await connect();
        if (db !== undefined) {
            await db.dropDatabase();
            await db.collection("Categories").insertMany(categories);
            await db.collection("Products").insertMany(products);
        }

    }
}