namespace OverseerWebAPI.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsActive { get; set; }
        //public int UserId { get; set; }
        public virtual User User { get; set; }
        //public int OrganizationId { get; set; }
        public virtual Organization Organization { get; set; }
    }
}
