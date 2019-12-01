using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Week1.Function.models;
using System.Net;
using System.Text;

namespace Week1.Function
{
    public static class dreidel
    {
        [FunctionName("dreidel")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            DreidelValue[] DreidelArray = {
                new DreidelValue(){
                    Name = "Nun",
                    Value = "נ"
                },
                new DreidelValue(){
                    Name = "Gimmel",
                    Value = "ג"
                },
                new DreidelValue(){
                    Name = "Hay",
                    Value = "ה"
                },
                new DreidelValue(){
                    Name = "Shin",
                    Value = "ש"
                }
            };

            Random rnd = new Random();
            int i = rnd.Next(4);

            DreidelValue response = DreidelArray[i];

            return (ActionResult)new OkObjectResult(response);
        }
    }
}
