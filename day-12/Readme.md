# 25daysofserverless Day 12

## The Challenge

### API Endpoint - Caching

*Thursday 12 December 2019* 

Today in London, Simona wants to send beautiful holiday cards to all her friends But since she's worried they won't arrive in time, she doesn't want to hand-write and mail each individual letter!

Instead, she wants to make each of her friends a personalized website containing a holiday letter for them! She plans on writing each letter as its own Markdown file, and needs a way to turn those into websites.

Create a service that reads Markdown text from GitHub (perhaps using the Gist API), parses the Markdown to HTML, and returns the HTML to the client.

As a bonus challenge: reading and parsing Markdown is a lot of work! To optimize, cache your responses and send cached versions of the processed Markdown.

## Solution

### Dependencies

```
npm install -s showdown
npm install -s axios
npm install redis
npm install bluebird
```

### Run

Try run [tests](test.html)

## Resources/Tools Used rocket

Here are tools I used:

| Tool                                                                                                                                                            | Description                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [**Visual Studio Code**](https://code.visualstudio.com/?WT.mc_id=25daysofserverless-github-cxa)                                                                 | Code editor                                                  |
| [**VScode Extension REST Client**](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                                                                                                            | API testing client                                           |
| [**VScode Extension Azure Functions**](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=25daysofserverless-github-cxa) | Scaffold, debug and deploy serverless functions from VS Code |
| [**Showdown**](http://showdownjs.com/)                                                                                                                 | Markdown2HTML converter                |


## Other Resources ⭐️

Other helpful Resources can be found here:

-   ✅ **[Azure Functions documentation](https://docs.microsoft.com/azure/azure-functions?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Azure Redis Cache documentation](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-nodejs-get-started)**
-   ✅ **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Create your first function using Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=25daysofserverless-github-sakriema)**
-   ✅ **[Free E-Book - Azure Serverless Computing Cookbook, Second Edition](https://azure.microsoft.com/resources/azure-serverless-computing-cookbook/?WT.mc_id=25daysofserverless-github-sakriema)**

