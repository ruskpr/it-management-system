using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class TicketComment
    {
        public int Id { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string Text { get; set; }
        public DateTime DateAdded { get; set; }
        //public int TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        //public int UserId { get; set; }
        public virtual User User { get; set; }

    }
}
