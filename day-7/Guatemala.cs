using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Day7.Function.Models;

namespace Day7.Function
{
    public static class Guatemala
    {
        [FunctionName("Guatemala")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");




            string query = req.Query["query"];
            string accessToken = Environment.GetEnvironmentVariable("client_id");

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://api.unsplash.com/search/photos?query=" + query);
                client.DefaultRequestHeaders.Add("Authorization", "Client-ID " + accessToken);

                var result = await client.GetAsync("");
                var resultContent = await result.Content.ReadAsStringAsync();

                log.LogInformation(resultContent);

                return (ActionResult)new OkObjectResult(resultContent);


            }
        }
    }
}
