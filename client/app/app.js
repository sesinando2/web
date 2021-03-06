window._ = require('underscore');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate'
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min.css';
import 'startbootstrap-sb-admin-2/dist/css/timeline.css';
import 'startbootstrap-sb-admin-2/dist/css/sb-admin-2.css';
import 'startbootstrap-sb-admin-2/bower_components/morrisjs/morris.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome-animation/dist/font-awesome-animation.css';

import 'startbootstrap-sb-admin-2/bower_components/jquery/dist/jquery.min';
import 'jquery-ui'
import 'bootstrap/dist/js/bootstrap.min';
import 'startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min';
import 'startbootstrap-sb-admin-2/dist/js/sb-admin-2';

angular.module('app', [
    uiRouter,
    animate,
    Common,
    Components,
    Services
  ])

  .config(($urlRouterProvider) => {
    "ngInject";

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(false).hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $urlRouterProvider.when('/', ($state, userInfo) => {
      if (userInfo.roles.find((role) => role.authority === 'ROLE_ADMIN')) {
        $state.go('account');
      } else if (userInfo.account) {
        $state.go('people');
      }
    });
  })

  .component('app', AppComponent);
