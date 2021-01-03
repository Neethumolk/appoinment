using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorsAppointment.API.Models
{
    public class DoctorDetail
    {
        [Key]
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public int Experience { get; set; }
        public Int64 PhoneNumber { get; set; }
        public string Specialization { get; set; }
        
    }
}
