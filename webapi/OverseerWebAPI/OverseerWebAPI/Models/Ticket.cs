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
        [Column(TypeName = "varchar(100)")]
        public string Description { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        public bool IsActive { get; set; }

        public virtual User User { get; set; }

        public virtual Organization Organization { get; set; }
    }
}
