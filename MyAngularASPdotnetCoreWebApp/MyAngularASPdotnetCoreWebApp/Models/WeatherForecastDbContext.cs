using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyAngularASPdotnetCoreWebApp.Models
{
    public partial class WeatherForecastDbContext : DbContext
    {
        public virtual DbSet<WeatherForecast> WeatherForecast { get; set; }

        public WeatherForecastDbContext(DbContextOptions<WeatherForecastDbContext> options) : base(options)
        {

        }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer(@"Data Source=JDW07STD00286;Initial Catalog=WeatherForecastDb;Integrated Security=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WeatherForecast>(entity =>
            {
                entity.HasKey(e => e.DateFormatted);

                entity.Property(e => e.DateFormatted)
                    .HasColumnName("dateFormatted")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Summary)
                    .IsRequired()
                    .HasColumnName("summary")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TemperatureC).HasColumnName("temperatureC");

                entity.Property(e => e.TemperatureF).HasColumnName("temperatureF");
            });
        }
    }
}
