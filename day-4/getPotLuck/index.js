var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let url = process.env["mongoDbUrl"];
    let db_name = process.env["db_name"];
    let collection_name = process.env["collection_name"]; 

    context.log('Connecting...');
    try {
        let client = await MongoClient.connect(url);
        context.log('connected!');
        var db = client.db(db_name);

        const id = req.params.id;
        context.log(id);
        if (id){
            let doc = await db.collection(collection_name).findOne({"_id" : ObjectId(id)});
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: doc,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
        else 
        {
            let docs = await db.collection(collection_name).find({}).toArray();
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: docs,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }

        
    }
    catch(e)
    {
        context.log('Error!')
    }
};