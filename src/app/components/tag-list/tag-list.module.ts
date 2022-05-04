import angular from 'angular';
import ngResource from 'angular-resource';

import { TagModule } from '../tag/tag.module';

import { TagListComponent } from './tag-list.component';
import { TagListService } from './tag-list.service';
import './tag-list.scss';

export const TagListModule = angular
  .module('tagList', [ngResource, TagModule])
  .component('tagList', TagListComponent)
  .service('tagListService', TagListService).name;
