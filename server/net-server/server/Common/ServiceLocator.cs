using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//TODO: add reference to X.Framework.Integration

namespace server.Common
{
	/// <summary>
	
	/// </summary>
	public class ServiceLocator
	{
		public static I GetService<I>() where I : class
		{
			string serviceName = typeof(I).Name;
			I ret = default(I);
			string uri = System.Configuration.ConfigurationManager.AppSettings[serviceName] ?? "";

			if (string.IsNullOrEmpty(uri))
			{
				throw new EntryPointNotFoundException(string.Format("{0} not found in AppSettings", serviceName));
			}

			//ret= (I)ServiceClient.CreatProxyInterface<I>(uri, false);

			return ret;
		}
		


	}
}