import angular from 'angular';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import './app.less';

angular.module('app', [ComponentsModule]).component('app', AppComponent).name;
