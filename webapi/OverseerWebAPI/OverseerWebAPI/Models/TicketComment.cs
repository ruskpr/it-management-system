namespace OverseerWebAPI.Models
{
    public class TicketComment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime DateAdded { get; set; }
        public int TicketId { get; set; }
        public Ticket Ticket { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }

    }
}
