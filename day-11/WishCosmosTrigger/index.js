const axios = require("axios");

module.exports = async function (context, documents) {
    if (!!documents && documents.length > 0) {
        const response = await axios({
            url: 'https://hooks.slack.com/services/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',
            method: "post",
            data: {
                text: "new wish from " + documents[0].name + ", she want " + documents[0].wish + " in " + documents[0].address
              }
          });

        context.log('Document Id: ', documents[0].id);
    }
}
