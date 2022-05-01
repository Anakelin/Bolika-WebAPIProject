using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Bolika_API;

public class Skills
{
    [Key]
    public int Id {get;set;}
    public string Name {get;set;}
    public int Dmg {get;set;}
    public int Cst {get;set;}
    public string Desc {get;set;}
    public string Img  {get;set;}
    
}
