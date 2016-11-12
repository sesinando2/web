import angular from 'angular';
import TeamService from './team.service';

let teamServiceModule = angular.module('services.team', [])

.service('teamService', TeamService)

.name;

export default teamServiceModule
