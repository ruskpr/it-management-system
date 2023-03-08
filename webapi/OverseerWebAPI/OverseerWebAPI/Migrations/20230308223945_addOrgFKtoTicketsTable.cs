using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OverseerWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class addOrgFKtoTicketsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrganizationId",
                table: "Tickets",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_OrganizationId",
                table: "Tickets",
                column: "OrganizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Organizations_OrganizationId",
                table: "Tickets",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Organizations_OrganizationId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_OrganizationId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "OrganizationId",
                table: "Tickets");
        }
    }
}
