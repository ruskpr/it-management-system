namespace OverseerWebAPI.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string AccessKey { get; set; }
        public List<User> Users { get; set; } = new List<User>();
    }
}
