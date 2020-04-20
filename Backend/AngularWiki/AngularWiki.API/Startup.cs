using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWiki.API.Models.Entities.Database;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace AngularWiki.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            try
            {
                string sqlConnectionString = "";

                if (string.IsNullOrWhiteSpace(sqlConnectionString))
                    sqlConnectionString = Configuration.GetConnectionString("SqlServerConnection");

                services.AddDbContext<AngularWikiDbContext>(options =>
                {
                    options.UseSqlServer(Configuration.GetConnectionString("SqlServerConnection"));
                });

                services.AddControllers();

                services.AddCors(options =>
                {
                    options.AddPolicy(
                        "CorsPolicy",
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader());
                });

                services.AddSpaStaticFiles(config =>
                {
                    config.RootPath = "ClientApp/dist";
                });
            }
            catch (Exception e)
            {
                System.Diagnostics.Trace.TraceError($"Error during configuration of the services: {e.Message}");
                throw e;
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSpaStaticFiles();

            app.UseCors("CorsPolicy");

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
            });
        }
    }
}
