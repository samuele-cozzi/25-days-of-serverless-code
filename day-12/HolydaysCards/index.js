const showdown  = require('showdown');
const axios = require("axios");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const _id = req.query.id;

    const response = await axios({
        url: 'https://api.github.com/gists/' + _id,
        method: "get"
      });
    

    console.log(response);

    let converter = new showdown.Converter();
    let html      = converter.makeHtml(response.data.files[Object.keys(response.data.files)[0]].content);


    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: html,
            headers: {
                'Content-Type': 'text/html'
            }
        };
    
};