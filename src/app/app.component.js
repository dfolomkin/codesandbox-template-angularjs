import template from './app.html';

export const AppComponent = {
  template,
  controller: /* @ngInject */ class AppComponent {
    constructor($scope) {
      this.$scope = $scope;
    }

    $onInit() {}
  },
};
