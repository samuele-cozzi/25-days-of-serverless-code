var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('../utilities/docDbUtils');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let url = process.env["mongoDbUrl"];
    let key = process.env["accountKey"];
    let db_name = process.env["db_name"];
    let collection_name = process.env["collection_name"]; 

    context.log('Connecting...');
    try {
        let client = new DocumentDBClient(url, {
            masterKey: key
        });
        
        
        docdbUtils.getOrCreateDatabase(client, db_name, function (err, db) {
            console.log('connesso db');
            if (err) {
                callback(err);
            } else {
                docdbUtils.getOrCreateCollection(client, db._self, collection_name, function (err, coll) {
                    
                    if (err) {
                        console.log('connesso collection' + err);

                    } else {
                        console.log('connesso collection' + coll);
                        client.createDocument(coll._self, req.body, function (err, doc) {
                            console.log('connesso iteml');
                            if (err) {
                                console.log(err);
                
                            } else {
                                console.log(doc);
                            }});
                    }
                });
            }
        });

        //var db = client.db(db_name);
        //let doc = await db.collection(collection_name).insertOne(req.body);
        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: doc,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    catch(e)
    {
        context.log('Error!')
    }
};