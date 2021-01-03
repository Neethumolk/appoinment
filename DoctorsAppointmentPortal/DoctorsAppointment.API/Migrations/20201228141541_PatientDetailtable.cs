using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorsAppointment.API.Migrations
{
    public partial class PatientDetailtable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "PatientDetails");

            migrationBuilder.RenameColumn(
                name: "DoctorName",
                table: "PatientDetails",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "DoctorDepartment",
                table: "PatientDetails",
                newName: "Password");

            migrationBuilder.AddColumn<int>(
                name: "PhoneNumber",
                table: "PatientDetails",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "PatientDetails");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "PatientDetails",
                newName: "DoctorName");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "PatientDetails",
                newName: "DoctorDepartment");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "PatientDetails",
                type: "text",
                nullable: true);
        }
    }
}
