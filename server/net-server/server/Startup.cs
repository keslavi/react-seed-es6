using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(server.Startup))]
namespace server
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
