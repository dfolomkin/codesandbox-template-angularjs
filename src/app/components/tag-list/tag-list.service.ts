/* @ngInject */
export class TagListService {
  constructor(private $resource) {}

  getTagsApi() {
    return this.$resource('https://pokeapi.co/api/v2/pokemon');
  }
}
