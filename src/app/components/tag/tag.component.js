import template from './tag.html';

export const TagComponent = {
  bindings: {
    tag: '<',
  },
  template,
  controller: /* @ngInject */ class TagComponent {
    constructor($scope) {
      this.$scope = $scope;
    }

    $onInit() {}
  },
};
