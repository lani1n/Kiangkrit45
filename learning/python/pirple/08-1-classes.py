# Lecture: Introduction to Classes

class team:
    def __init__(self, Name = "NaN", Origin = "NaN"):
        self.team_name = Name
        self.team_origin = Origin 
    def defineTeamName(self, Name):
        self.team_name = Name
    def defineTeamOrigin(self, Origin):
        self.team_origin = Origin

# Lecture: Class Inheritance

# class player(team):
#     def __init__(self):
#         team.__init__(self)
#         self.player_name = "Unknown"
#         self.player_points = 0
    
#     def scored_player(self):
#         self.player_points += 1
    
#     def set_name(self, name):
#         self.player_name = name

team1 = team()
print(team1.team_name)
print(team1.team_origin)

team1.defineTeamName("MTG.Trust")
team1.defineTeamOrigin("Thailand")
print(team1.team_name)
print(team1.team_origin)

team2 = team("EG", "America")
print(f"team_name is {team2.team_name}. \nTeamOrigin is {team2.team_origin}.")

team3 = team()
print(team3.team_name)
print(team3.team_origin)

class player(team):
    def __init__(self, player_name, player_points, team_name, team_origin):
        team.__init__(self, team_name, team_origin)
        self.player_name = player_name
        self.player_points = player_points
    def scored_points(self):
        self.player_points += 1
    def set_name(self, name):
        self.player_name = name
    def __str__(self):
        return f"{self.player_name} has scored: {str(self.player_points)} points."

player1 = player("Pontiff", 0, "Sulyvahn", "Irithyll")

print(player1.player_name)
print(player1.player_points)

# inherited from team
print(player1.team_name)
print(player1.team_origin)

player1.scored_points()
print(player1.player_points)

player1.set_name("Gwyndolin")
print(player1.player_name)

print(player1)