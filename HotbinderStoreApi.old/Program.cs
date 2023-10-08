using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using HotbinderStoreApi.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<HotbinderStoreApiContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("HotbinderStoreApiContext") ?? throw new InvalidOperationException("Connection string 'HotbinderStoreApiContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(
       options => options.WithOrigins("http://localhost:4200").AllowAnyMethod()
   );


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
