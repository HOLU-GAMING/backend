
const AdwardTeamsModel = require('./adwardTeams.model');
const AdwardsModel = require('./adwards.model');
const GameModesModel = require('./gameModes.model');
const GameTypeGamesModel = require('./gameTypeGames.model');
const GuestsModel = require('./guests.model');
const MatchesModel = require('./matches.model');
const OrganizersModel = require('./organizers.model');
const PlayerGamesModel = require('./playerGames.model');
const PlayerMatchesModel = require('./playerMatches.model');
const PlayerTeamTournamentsModel = require('./playerTeamTournaments.model');
const PlayerTeamsModel = require('./playerTeams.model');
const PlayersModel = require('./players.model');
const RoundsModel = require('./rounds.model');
const RulesModel = require('./rules.model');
const SocialNetworkPlayersModel = require('./socialNetworkPlayers.model');
const SocialNetworkTeamsModel = require('./socialNetworkTeams.model');
const TeamMatchesModel = require('./teamMatches.model');
const TeamTournamentsModel = require('./teamTournaments.model');
const TeamsModel = require('./teams.model');
const TournamentOrganizersModel = require('./tournamentOrganizers.model');
const TournamentsModel = require('./tournaments.model');
const TypeGamesModel = require('./typeGames.model');
const TypeTournamentsModel = require('./typeTournaments.model');
const GamesModel = require('./games.model');


TournamentsModel.belongsTo(GamesModel, {foreignKey: 'id_game'});
TournamentsModel.belongsTo(TypeTournamentsModel, {foreignKey: 'id_type_tournament'});
TournamentsModel.belongsTo(PlayersModel, {foreignKey: 'id_player'});


module.exports = {
    AdwardTeamsModel,
    AdwardsModel,
    GameModesModel,
    GameTypeGamesModel,
    GuestsModel,
    MatchesModel,
    OrganizersModel,
    PlayerGamesModel,
    PlayerMatchesModel,
    PlayerTeamTournamentsModel,
    PlayerTeamsModel,
    PlayersModel,
    RoundsModel,
    RulesModel,
    SocialNetworkPlayersModel,
    SocialNetworkTeamsModel,
    TeamMatchesModel,
    TeamTournamentsModel,
    TeamsModel,
    TournamentOrganizersModel,
    TournamentsModel,
    TypeGamesModel,
    TypeTournamentsModel,
    GamesModel
}