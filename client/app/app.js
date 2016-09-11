import angular from 'angular';
import uiRouter from 'angular-ui-router';
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

import 'startbootstrap-sb-admin-2/bower_components/jquery/dist/jquery.min';
import 'jquery-ui'
import 'bootstrap/dist/js/bootstrap.min';
import 'startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min';
import 'startbootstrap-sb-admin-2/dist/js/sb-admin-2';
import 'angular-bootstrap';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Services
  ])

  /*.config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(false).hashPrefix('!');
  })*/

  .component('app', AppComponent);
