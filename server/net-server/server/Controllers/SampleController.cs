using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace server.Controllers
{ 
	public class Sample
	{
		public string text { get; set; }
		public string value { get; set;}
	}
    public class SampleController : ApiController
    {
        // GET: api/Sample
        public IHttpActionResult Get()
        {
			Sample ret = new Sample() { text = "abc", value = "123" };
			return Ok(ret);
        }

        // GET: api/Sample/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Sample
        public IHttpActionResult Post([FromBody]Sample sample)
        {
			return Ok(new Sample() { text = "def", value = "456" });
		}

		// PUT: api/Sample/5
		public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Sample/5
        public void Delete(int id)
        {
        }
    }
}
