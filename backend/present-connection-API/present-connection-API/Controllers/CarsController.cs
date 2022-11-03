using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using present_connection_API.Models;

namespace present_connection_API.Controllers
{
    [ApiController]
    public class CarsController : Controller
    {
        private readonly CarDbContext _context;

        public CarsController(CarDbContext context)
        {
            _context = context;
        }

        [HttpGet("~/api/cars")]
        public async Task<ActionResult<List<Car>>> Index()
        {
            return await _context.Cars.ToListAsync();
        }



        [HttpGet("~/api/cars/details/{id}")]
        public async Task<ActionResult<Car>> Details(int? id)
        {
            if (id == null || _context.Cars == null)
            {
                return NotFound();
            }

            var car = await _context.Cars
                .FirstOrDefaultAsync(c => c.CarId == id);
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        [HttpPost("~/api/create")]
        public async Task<ActionResult<Car>> Create([Bind("CarId,CarBrand,CarModel,CarYear,CarFuelType,CarBodyStyle,CarTypeOfGearbox,CarColour,CarNumberOfDoors")] Car car)
        {
            if (ModelState.IsValid)
            {
                _context.Add(car);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(car);
        }

        private bool CarExists(int id)
        {
          return _context.Cars.Any(e => e.CarId == id);
        }
    }
}
