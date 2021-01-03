using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DoctorsAppointment.API.Models;

namespace DoctorsAppointment.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientDetailController : ControllerBase
    {
        private readonly AppointmentDbContext _context;
        public PatientDetailController(AppointmentDbContext context)
        {
            _context = context;
        }
        /*[HttpPost]
        [Route("login")]
        public IActionResult login([FromBody]PatientDetail patientDetail)
        {
            var patient = _context.PatientDetails.Where(x => x.Username.Equals(patientDetail.Username) && x.Password.Equals(patientDetail.Password)).Select(x => x).FirstOrDefault();
            if(patient!=null)
            {
                return Ok(patient);
            }
            return BadRequest("Invalide credentials");

        }*/
        //get api/patientdetail

        [HttpGet]
        //[Route("getpatientdetail")]
        public async Task<ActionResult<IEnumerable<PatientDetail>>> GetPatientDetails()
        {
            return await _context.PatientDetails.ToListAsync();
        }
        //GET API/PAYMENTDETAILS/5
        [HttpGet("{id}")]
        
        public async Task<ActionResult<PatientDetail>> GetPatientDetail(int id)
        {
            var patientDetail = await _context.PatientDetails.FindAsync(id);
            if (patientDetail == null)
            {
                return NotFound();
            }
            return patientDetail;
        }
        //put api/paymentdetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientDetail(int id, PatientDetail patientDetail)
        {
            if (id != patientDetail.PatientId)
            {
                return BadRequest();
            }
            _context.Entry(patientDetail).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
                
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!PatientDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<PatientDetail>> PostPatientDetail(PatientDetail patientDetail)
        {
            _context.PatientDetails.Add(patientDetail);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetPatientDetail", new { id = patientDetail.PatientId }, patientDetail);
        }
    
        
        [HttpDelete("{id}")]
         public async Task<IActionResult> DeletePatientDetail(int id)
         {
             var patientDetail = await _context.PatientDetails.FindAsync(id);
             if(patientDetail == null)
             {
                 return NotFound();
             }
            _context.PatientDetails.Remove(patientDetail);
            await _context.SaveChangesAsync();
            return NoContent();
         }
        private bool PatientDetailExists(int id)
        {
            return _context.PatientDetails.Any(e => e.PatientId == id);
        }
    }
}
