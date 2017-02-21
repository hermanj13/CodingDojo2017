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
		"alex_or_wyatt": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
