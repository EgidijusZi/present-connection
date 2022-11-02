using Microsoft.EntityFrameworkCore;

namespace present_connection_API.Models
{
    public class CarDbContext : DbContext
    {
        public CarDbContext(DbContextOptions<CarDbContext> options) : base(options)
        { }

        public DbSet<Car> Cars { get; set; }
    }
}
