import angular from 'angular';

import { TagComponent } from './tag.component';
import './tag.less';

export const TagModule = angular
  .module('tag', [])
  .component('tag', TagComponent).name;
