using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace present_connection_API.Models
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarBrand { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarModel { get; set; }
        public int CarYear { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarFuelType { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarBodyStyle { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarTypeOfGearbox { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CarColour { get; set; }
        public int CarNumberOfDoors{ get; set; }
    }
}
