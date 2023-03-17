using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class Ticket
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Title { get; set; }

        [Required]
        [Column(TypeName = "varchar(500)")]
        public string Description { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        [Required]
        public bool IsActive { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Creator { get; set; }

        [Required]
        public int OrganizationId { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Type { get; set; } // Foreign Key of Categories table
    }
}
