using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Bolika_API;

public class SkillLists
{
    [Key]
    public int SkillListId {get;set;}
    public Characters Character {get;set;}
    public Skills Skill {get;set;}
}
