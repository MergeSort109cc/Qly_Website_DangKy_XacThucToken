
using VNPAY.NET;

namespace Backend_API_Testing
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add VNPAY service to the container.
            builder.Services.AddSingleton<IVnpay, Vnpay>();

            builder.Services.AddControllers();

            // Add Swagger UI
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "VNPAY API with ASP.NET Core",
                    Version = "v1",
                    Description = "Created by Phan Xuan Quang"
                });
            });

            var app = builder.Build();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
            });

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
