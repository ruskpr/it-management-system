using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class TicketComment
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Text { get; set; }

        [Required]
        public DateTime DateAdded { get; set; }

        public virtual Ticket Ticket { get; set; }

        public virtual User User { get; set; }

    }
}
