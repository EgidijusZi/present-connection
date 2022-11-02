using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace present_connection_API.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    CarId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CarBrand = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarModel = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarYear = table.Column<int>(type: "int", nullable: false),
                    CarFuelType = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarBodyStyle = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarTypeOfGearbox = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarColour = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    CarNumberOfDoors = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.CarId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
