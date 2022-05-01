using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Bolika_API;

public class Statistics
{
    [Key]
    public int Id {get;set;}
    public int Hp {get;set;}
    public int Atk {get;set;}
    public int Def {get;set;}
    public int Spd {get;set;}
    public int Eng {get;set;}
}
