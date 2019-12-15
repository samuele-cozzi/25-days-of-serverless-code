const axios = require("axios");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const _id = req.query.id;

    const response = await axios({
        url: 'https://api.unsplash.com/photos/' + _id,
        method: "get",
        headers: {
            authorization: "Client-ID " + process.env.UnsplashKEY
        }
    });

    console.log(response.data.urls.regular);

    const response_ai = await axios({
        url: 'https://25daysofserverless-day15.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Categories,Color,Description&language=en',
        method: "post",
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.CognitiveKEY
        },
        data: {"url": response.data.urls.regular}
    });

    console.log(response_ai);

    context.res = {
        //status: 200, /* Defaults to 200 */
        body: response_ai.data,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};