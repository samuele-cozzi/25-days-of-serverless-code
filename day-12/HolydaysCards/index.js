const showdown = require('showdown');
const axios = require("axios");
let redis = require("redis");
let bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const _id = req.query.id;

    var cacheConnection = redis.createClient(6380, process.env.REDISCACHEHOSTNAME,
        { auth_pass: process.env.REDISCACHEKEY, tls: { servername: process.env.REDISCACHEHOSTNAME } });

    const response_cached = await cacheConnection.getAsync(_id);

    if (response_cached == null) {

        console.log("response_cached: " + response_cached);

        const response = await axios({
            url: 'https://api.github.com/gists/' + _id,
            method: "get"
        });


        console.log(response);

        let converter = new showdown.Converter();
        let html = converter.makeHtml(response.data.files[Object.keys(response.data.files)[0]].content);

        await cacheConnection.setAsync(_id, html);

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: html,
            headers: {
                'Content-Type': 'text/html'
            }
        };

    }
    else 
    {
        console.log("cached!!!")
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: response_cached,
            headers: {
                'Content-Type': 'text/html'
            }
        };
    }

};