namespace OverseerWebAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Bio { get; set; }
        public string OrgRole { get; set; }
        public bool IsOrgAdmin { get; set; } = false;
        public bool IsSuperuser { get; set; } = false;
        public int OrganizationId { get; set; }
        public Organization Organization { get; set; }
    }
}
