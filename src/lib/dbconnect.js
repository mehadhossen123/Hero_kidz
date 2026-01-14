const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const database = process.env.DB_NAME;
export const collections={
    PRODUCTS:"products",
    USERS:'users'
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const connect=(cname)=>{
    return client.db(database).collection(cname)

}