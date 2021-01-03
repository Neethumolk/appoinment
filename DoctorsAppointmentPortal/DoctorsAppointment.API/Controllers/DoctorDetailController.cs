using DoctorsAppointment.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace DoctorsAppointment.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorDetailController : ControllerBase
    {
        private readonly AppointmentDbContext _context;
        public DoctorDetailController(AppointmentDbContext context)
        {
            _context = context;
        }
       // /GET API/PAYMENTDETAILS/5
        
        [HttpGet]
        
        // [Route("api/doctordetail]")]
        public async Task<ActionResult<IEnumerable<DoctorDetail>>> GetDoctorDetails()
        {
            return await _context.DoctorDetails.ToListAsync();
     
        }
        [HttpGet("{id}")]
        //[Route("api/getbyiddoctordetail")]
        public async Task<ActionResult<DoctorDetail>> GetDoctorDetail(int id)
        {
            var doctorDetail = await _context.DoctorDetails.FindAsync(id);
            if (doctorDetail == null)
            {
                return NotFound();
            }
            return doctorDetail;
        }

        //put
        [HttpPut("{id}")]
        //[Route("api/putdoctordetail")]
        public async Task<IActionResult> PutDoctorDetail(int id, DoctorDetail doctorDetail)
        {
            if (id != doctorDetail.DoctorId)
            {
                return BadRequest();
            }
            _context.Entry(doctorDetail).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (DoctorDetailExists(id))
                {
                    throw;
                }
                else
                {
                    return NotFound();
                }
            }
            return NoContent();
        }
        [HttpPost]
     
        public async Task<ActionResult<DoctorDetail>> PostDoctorDetail(DoctorDetail doctorDetail)
        {
            _context.DoctorDetails.Add(doctorDetail);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetDoctorDetail", new { id = doctorDetail.DoctorId }, doctorDetail);
        }
        [HttpDelete("{id}")]
        //[Route("api/deletedoctordetail")]
        public async Task<IActionResult> DeletePatientDetail(int id)
        {
            var doctorDetail = await _context.DoctorDetails.FindAsync(id);
            if (doctorDetail == null)
            {
                return NotFound();
            }
            _context.DoctorDetails.Remove(doctorDetail);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        private bool DoctorDetailExists(int id)
        {
            return _context.DoctorDetails.Any(e => e.DoctorId == id);
        }
    }
}
