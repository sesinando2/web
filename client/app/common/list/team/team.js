import angular from 'angular';
import teamComponent from './team.component';

let teamModule = angular.module('list.team', [])

.component('team', teamComponent)

.name;

export default teamModule;
