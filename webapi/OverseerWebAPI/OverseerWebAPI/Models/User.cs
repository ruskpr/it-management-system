using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? Email { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string? Bio { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? OrgRole { get; set; }

        [Required]
        public int OrganizationId { get; set; }

        //public List<TicketComment> TicketComments { get; set; }
    }
}
