# 25daysofserverless Day 11

## The Challenge

### API Endpoint - Picture Challenge

*Saturday 11 December 2019* 

It's that time of the year when all children start wishing for something amazing to end up in their stocking!

After last week's challenge, Santa's servers are completely overwhelmed with requests from children!

To help him handle the load, your challenge today is to build him a system that takes in childrens' requests and stores them for later processing. Additionally, he wants his elves to be notified every time a new gift wish arrives. If each new wish was published to something like Slack or Microsoft Teams, that would be super helpful in keeping his elves on top of all the requests!

Santa needs an endpoint that receives data in this format:

   - a description of the wish
   - who it's from
    - address
    - type of present (e.g toy, clothes, animal etc..)

Santa should be able to query that database on his own (he's a bit of a micromanager — this helps keep him off the elves' back!), as well as having a message get posted to Slack or another chat service whenever data is added to the database.

As a bonus challenge: kids would love a nice UI to input their wishes. Help them by building a webpage with a form that submits data in the previous format!

## Solution

### Dependencies

```
npm install -s documentdb
npm install -s axios
```

### Run

The documentation of function call [code](/test.html)

## Resources/Tools Used rocket

Here are tools I used:

| Tool                                                                                                                                                            | Description                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [**Visual Studio Code**](https://code.visualstudio.com/?WT.mc_id=25daysofserverless-github-cxa)                                                                 | Code editor                                                  |
| [**VScode Extension REST Client**](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                                                                                                            | API testing client                                           |
| [**VScode Extension Azure Functions**](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=25daysofserverless-github-cxa) | Scaffold, debug and deploy serverless functions from VS Code |
| [**Slack**](https://slack.com/intl/en-pl/help/articles/115005265063-incoming-webhooks-for-slack)                                                                                                                 | Messaging App                |


## Other Resources ⭐️

Other helpful Resources can be found here:

-   ✅ **[Azure Functions documentation](https://docs.microsoft.com/azure/azure-functions?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Create your first function using Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Free E-Book - Azure Serverless Computing Cookbook, Second Edition](https://azure.microsoft.com/resources/azure-serverless-computing-cookbook/?WT.mc_id=25daysofserverless-github-sakriema)**

