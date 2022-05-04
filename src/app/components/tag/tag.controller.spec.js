/* eslint no-undef: "off" */

describe('TagController', () => {
  let ctrl;

  beforeEach(angular.mock.module('tag'));

  beforeEach(inject(($componentController) => {
    ctrl = $componentController('tag', null);
  }));

  describe('dependecies', () => {
    it('should be defined', () => {
      expect(ctrl.$scope).toBeDefined();
    });
  });
});
