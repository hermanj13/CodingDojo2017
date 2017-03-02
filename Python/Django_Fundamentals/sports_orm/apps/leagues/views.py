from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	context = {
		"baseball": League.objects.filter(sport="Baseball"),
		"women": League.objects.filter(name__contains="womens"),
		"hockey": League.objects.filter(sport__contains="hockey"),
		"notfootball": League.objects.exclude(sport="football"),
		"conferences": League.objects.filter(name__contains="conference"),
		"atlantic": League.objects.filter(name__contains="atlantic"),
		"dallas": Team.objects.filter(location="Dallas"),
		"raptors": Team.objects.filter(team_name__contains="raptors"),
		"contain_city": Team.objects.filter(location__contains="city"),
		"t_teams": Team.objects.filter(team_name__startswith="T"),
		"alphabetical_location": Team.objects.order_by("location"),
		"reverse_teams": Team.objects.order_by("-team_name"),
		"coopers": Player.objects.filter(last_name="Cooper"),
		"joshua": Player.objects.filter(first_name="Joshua"),
		"coopers_no_joshua": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alex_or_wyatt": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt"),
		"asc": Team.objects.filter(league__name="Atlantic Soccer Conference"),
		"currpengs": Player.objects.filter(curr_team__team_name="Penguins"),
		"icbc": Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference"),
		"acoaf": Player.objects.filter(curr_team__league__name="American Conference of Amateur Football").filter(last_name="Lopez"),
		"football_players": Player.objects.filter(curr_team__league__sport="Football"),
		"sophia_team": Team.objects.filter(curr_players__first_name="Sophia"),
		"sophia_league": League.objects.filter(teams__curr_players__first_name="Sophia"),
		"flores": Player.objects.filter(last_name="Flores").exclude(curr_team__team_name="Roughriders")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
