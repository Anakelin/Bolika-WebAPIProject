using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Bolika_API;

public class Characters
{
    [Key]
    public int CharId {get;set;}
    public string CharRole {get;set;}
    public string CharImg {get;set;}
    public Statistics Statistic { get; set; }
}
