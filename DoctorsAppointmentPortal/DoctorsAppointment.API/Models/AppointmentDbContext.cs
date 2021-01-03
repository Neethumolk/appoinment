using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorsAppointment.API.Models
{
    public class AppointmentDbContext : DbContext
    {
        public AppointmentDbContext(DbContextOptions<AppointmentDbContext> options) : base(options)
        {

        }
        public DbSet<DoctorDetail> DoctorDetails { get; set; }
        public DbSet<PatientDetail> PatientDetails { get; set; }
        public DbSet<BookAppointmentDetail> BookAppointmentDetails { get; set; }
    }
}
