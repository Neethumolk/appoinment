﻿// <auto-generated />
using DoctorsAppointment.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DoctorsAppointment.API.Migrations
{
    [DbContext(typeof(AppointmentDbContext))]
    [Migration("20201228053306_IntialCreate")]
    partial class IntialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("DoctorsAppointment.API.Models.PatientDetail", b =>
                {
                    b.Property<int>("PatientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("DoctorDepartment")
                        .HasColumnType("text");

                    b.Property<string>("DoctorName")
                        .HasColumnType("text");

                    b.Property<int>("PatientAge")
                        .HasColumnType("integer");

                    b.Property<string>("PatientName")
                        .HasColumnType("text");

                    b.HasKey("PatientId");

                    b.ToTable("PatientDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
