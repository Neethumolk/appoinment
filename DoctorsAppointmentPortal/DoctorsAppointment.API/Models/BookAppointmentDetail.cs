using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorsAppointment.API.Models
{
    public class BookAppointmentDetail
    {
        [Key]
        public int BookingId { get; set; }
        public string PatientName { get; set; }
        public int Age { get; set; }
        public string DoctorName { get; set; }
        public string Description { get; set; }
        public string  DateTime { get; set; }
    }
}
