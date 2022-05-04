import { IComponentOptions, IController, IScope } from 'angular';

import template from './tag-list.html';
import { TagListService } from './tag-list.service';

interface ITag {
  name: string;
  url: string;
}

export const TagListComponent: IComponentOptions = {
  template,
  controller: /* @ngInject */ class TagListComponent implements IController {
    tags: ITag[];

    constructor(
      private $scope: IScope,
      private tagListService: TagListService
    ) {}

    $onInit() {
      this.tagListService
        .getTagsApi()
        .get()
        .$promise.then((res) => {
          this.tags = res.results;
        });
    }
  },
};
