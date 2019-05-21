using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace JDAU_DashboardApp.Models
{
    public partial class JDS_Flow_Prod_StageContext : DbContext
    {
        IConfiguration _Config;

        public JDS_Flow_Prod_StageContext()
        {
        }

        public JDS_Flow_Prod_StageContext(DbContextOptions<JDS_Flow_Prod_StageContext> options,IConfiguration config)
            : base(options)
        {
            _Config = config;
        }

        public virtual DbSet<ReportingMcV01> ReportingMcV01 { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Data Source=JDW07STD00286;Initial Catalog=JDS_Flow_Prod_Stage;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
                optionsBuilder.UseSqlServer(_Config["JDFlowconStr"]);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<ReportingMcV01>(entity =>
            {
                entity.HasKey(e => e.Date)
                    .HasName("PK_JH_REPORTING_MC_V.01");

                entity.ToTable("JH_REPORTING_MC_V01");

                entity.Property(e => e.Date)
                    .HasColumnName("DATE")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.ChargedGrossAu)
                    .HasColumnName("CHARGED_GROSS_AU")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedGrossTotal)
                    .HasColumnName("CHARGED_GROSS_TOTAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedGrossUk)
                    .HasColumnName("CHARGED_GROSS_UK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedJackspeacialUk)
                    .HasColumnName("CHARGED_JACKSPEACIAL_UK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedJackspecialAu)
                    .HasColumnName("CHARGED_JACKSPECIAL_AU")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedJackspecialTotal)
                    .HasColumnName("CHARGED_JACKSPECIAL_TOTAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedNetAu)
                    .HasColumnName("CHARGED_NET_AU")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedNetTotal)
                    .HasColumnName("CHARGED_NET_TOTAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargedNetUk)
                    .HasColumnName("CHARGED_NET_UK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersAu)
                    .HasColumnName("FULFILLEDORDERS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersAuQty)
                    .HasColumnName("FULFILLEDORDERS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersTotal)
                    .HasColumnName("FULFILLEDORDERS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersTotalQty)
                    .HasColumnName("FULFILLEDORDERS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersUk)
                    .HasColumnName("FULFILLEDORDERS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledordersUkQty)
                    .HasColumnName("FULFILLEDORDERS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsAu)
                    .HasColumnName("FULFILLEDUNITS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsAuQty)
                    .HasColumnName("FULFILLEDUNITS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsTotal)
                    .HasColumnName("FULFILLEDUNITS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsTotalQty)
                    .HasColumnName("FULFILLEDUNITS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsUk)
                    .HasColumnName("FULFILLEDUNITS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FulfilledunitsUkQty)
                    .HasColumnName("FULFILLEDUNITS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersAu)
                    .HasColumnName("ORDERS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersAuQty)
                    .HasColumnName("ORDERS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersTotal)
                    .HasColumnName("ORDERS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersTotalQty)
                    .HasColumnName("ORDERS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersUk)
                    .HasColumnName("ORDERS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrdersUkQty)
                    .HasColumnName("ORDERS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentProviderAfterpayGross)
                    .HasColumnName("PAYMENT_PROVIDER_AFTERPAY_GROSS")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentProviderCreditCardGross)
                    .HasColumnName("PAYMENT_PROVIDER_CREDIT_CARD_GROSS")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentProviderPaypalGross)
                    .HasColumnName("PAYMENT_PROVIDER_PAYPAL_GROSS")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersAu)
                    .HasColumnName("PENDINGORDERS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersAuQty)
                    .HasColumnName("PENDINGORDERS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersTotal)
                    .HasColumnName("PENDINGORDERS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersTotalQty)
                    .HasColumnName("PENDINGORDERS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersUk)
                    .HasColumnName("PENDINGORDERS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingordersUkQty)
                    .HasColumnName("PENDINGORDERS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsAu)
                    .HasColumnName("PENDINGUNITS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsAuQty)
                    .HasColumnName("PENDINGUNITS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsTotal)
                    .HasColumnName("PENDINGUNITS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsTotalQty)
                    .HasColumnName("PENDINGUNITS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsUk)
                    .HasColumnName("PENDINGUNITS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PendingunitsUkQty)
                    .HasColumnName("PENDINGUNITS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefundordersTotal)
                    .HasColumnName("REFUNDORDERS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefundordersTotalQty)
                    .HasColumnName("REFUNDORDERS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefundunitsTotal)
                    .HasColumnName("REFUNDUNITS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefundunitsTotalQty)
                    .HasColumnName("REFUNDUNITS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesGrossAu)
                    .HasColumnName("SALES_GROSS_AU")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesGrossTotal)
                    .HasColumnName("SALES_GROSS_TOTAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesGrossUk)
                    .HasColumnName("SALES_GROSS_UK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesNetAu)
                    .HasColumnName("SALES_NET_AU")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesNetTotal)
                    .HasColumnName("SALES_NET_TOTAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalesNetUk)
                    .HasColumnName("SALES_NET_UK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsAu)
                    .HasColumnName("UNITS_AU_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsAuQty)
                    .HasColumnName("UNITS_AU_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsTotal)
                    .HasColumnName("UNITS_TOTAL_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsTotalQty)
                    .HasColumnName("UNITS_TOTAL_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsUk)
                    .HasColumnName("UNITS_UK_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitsUkQty)
                    .HasColumnName("UNITS_UK_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.WarehouseCancelledUnits)
                    .HasColumnName("WAREHOUSE_CANCELLED_UNITS_$$")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.WarehouseCancelledUnitsQty)
                    .HasColumnName("WAREHOUSE_CANCELLED_UNITS_QTY")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
