using DoctorsAppointment.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorsAppointment.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookAppointmentDetailController : ControllerBase
    {
        private readonly AppointmentDbContext _context;
        public BookAppointmentDetailController(AppointmentDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookAppointmentDetail>>> GetBookAppointmentDetails()
        {
            return await _context.BookAppointmentDetails.ToListAsync();

        }
        [HttpPost]
        public async Task<ActionResult<BookAppointmentDetail>> PostBookAppointmentDetail(BookAppointmentDetail bookAppointmentDetail)
        {
            _context.BookAppointmentDetails.Add(bookAppointmentDetail);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetDoctorDetail", new { id = bookAppointmentDetail.BookingId }, bookAppointmentDetail);
        }
    }
}
