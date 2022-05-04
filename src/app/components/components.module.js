import angular from 'angular';

import { TagListModule } from './tag-list/tag-list.module';

export const ComponentsModule = angular.module('app.components', [
  TagListModule,
]).name;
