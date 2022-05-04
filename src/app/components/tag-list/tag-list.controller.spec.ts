describe('TagListController', () => {
  let ctrl;
  let service;

  beforeEach(angular.mock.module('tagList'));

  beforeEach(angular.mock.module('tagListServiceMock'));

  beforeEach(inject(($componentController, tagListService) => {
    ctrl = $componentController('tagList', null);
    service = tagListService;
  }));

  describe('dependecies', () => {
    it('should be defined', () => {
      expect(ctrl.$scope).toBeDefined();
      expect(ctrl.tagListService).toBeDefined();
    });
  });
});
