using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bolika_API.Migrations
{
    public partial class CreazioneDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Dmg = table.Column<int>(type: "INTEGER", nullable: false),
                    Cst = table.Column<int>(type: "INTEGER", nullable: false),
                    Desc = table.Column<string>(type: "TEXT", nullable: true),
                    Img = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Statistics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Hp = table.Column<int>(type: "INTEGER", nullable: false),
                    Atk = table.Column<int>(type: "INTEGER", nullable: false),
                    Def = table.Column<int>(type: "INTEGER", nullable: false),
                    Spd = table.Column<int>(type: "INTEGER", nullable: false),
                    Eng = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statistics", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    CharId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CharRole = table.Column<string>(type: "TEXT", nullable: true),
                    CharImg = table.Column<string>(type: "TEXT", nullable: true),
                    StatisticId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.CharId);
                    table.ForeignKey(
                        name: "FK_Characters_Statistics_StatisticId",
                        column: x => x.StatisticId,
                        principalTable: "Statistics",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SkillLists",
                columns: table => new
                {
                    SkillListId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CharacterCharId = table.Column<int>(type: "INTEGER", nullable: true),
                    SkillId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillLists", x => x.SkillListId);
                    table.ForeignKey(
                        name: "FK_SkillLists_Characters_CharacterCharId",
                        column: x => x.CharacterCharId,
                        principalTable: "Characters",
                        principalColumn: "CharId");
                    table.ForeignKey(
                        name: "FK_SkillLists_Skills_SkillId",
                        column: x => x.SkillId,
                        principalTable: "Skills",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Characters_StatisticId",
                table: "Characters",
                column: "StatisticId");

            migrationBuilder.CreateIndex(
                name: "IX_SkillLists_CharacterCharId",
                table: "SkillLists",
                column: "CharacterCharId");

            migrationBuilder.CreateIndex(
                name: "IX_SkillLists_SkillId",
                table: "SkillLists",
                column: "SkillId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SkillLists");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Statistics");
        }
    }
}
