using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace server.Common
{
	public static class JSONHelper
	{
		public static string ToJson(this object o)
		{

			string ret = JsonConvert.SerializeObject(o, Newtonsoft.Json.Formatting.Indented);
			return ret;
		}

		/// <summary>
		/// Deserialize json using the Newtonsoft.Json libary
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="json"></param>
		/// <returns></returns>
		public static T FromJson<T>(this string json)
		{
			T ret = default(T);
			if (!string.IsNullOrEmpty(json))
				ret = JsonConvert.DeserializeObject<T>(json);

			return ret;
		}
	}
}