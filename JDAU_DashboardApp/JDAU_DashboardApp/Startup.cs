using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JDAU_DashboardApp.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace JDAU_DashboardApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //spa.UseProxyToSpaDevelopmentServer("http://localhost:55077");

            //services.AddApplicationInsightsTelemetry(Configuration);
            //services.AddTransient<IMyInjectedService, MyInjectedService>();
            var conStr = Configuration.GetConnectionString("JDFlowconStr");
            services.AddDbContext<JDS_Flow_Prod_StageContext>(options => options.UseSqlServer(conStr));
            var clientDomain = Configuration.GetValue<string>("ClientDomain");
            services.AddCors(config => config.AddPolicy("ClientDomain", builder => builder.WithOrigins(clientDomain)));
            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowOrigin", builder => builder.AllowAnyOrigin());
            //    //WithOrigins("*").WithHeaders("*").WithMethods("*"));
            //});
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env,ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            //app.UseApplicationInsightsRequestTelemetry();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
