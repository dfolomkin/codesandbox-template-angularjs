angular.module('tagListServiceMock', []).service(
  'tagListService',
  class TagListServiceMock {
    getTagsApi() {
      return {
        get: () => ({
          $promise: Promise.resolve({
            results: [
              {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/',
              },
              {
                name: 'ivysaur',
                url: 'https://pokeapi.co/api/v2/pokemon/2/',
              },
            ],
          }),
        }),
      };
    }
  }
);
