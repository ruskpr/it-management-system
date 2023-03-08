using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string FirstName { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string LastName { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string Password { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "varchar(500)")]
        public string? Bio { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string OrgRole { get; set; }
        public bool IsOrgAdmin { get; set; } = false;
        public bool IsSuperuser { get; set; } = false;
        public int OrganizationId { get; set; }
        public Organization Organization { get; set; }
    }
}
