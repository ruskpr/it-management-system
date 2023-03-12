using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OverseerWebAPI.Models
{
    public class Organization
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Name { get; set; }

        [Required]  
        [Column(TypeName = "varchar(100)")]
        public string AccessKey { get; set; }

        [Required]
        public virtual List<User> User { get; set; }

    }
}
