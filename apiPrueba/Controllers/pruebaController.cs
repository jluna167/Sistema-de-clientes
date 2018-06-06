using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace apiPrueba.Controllers
{
    public class pruebaController : ApiController
    {
        
        [HttpGet]
        public IHttpActionResult algo()
        {
            X509Certificate2 cert = Request.GetClientCertificate();
            string issuer = cert.Issuer;
            string subject = cert.Subject;
            return Ok("algo");
        }
    }
}
