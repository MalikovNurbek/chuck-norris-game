import DEFAULT_API_INSTANCE from '~/api/index';

const jokeApi = {
  getRandomJoke() {
    const url = '/jokes/random';
    return DEFAULT_API_INSTANCE.get(url);
  },

  getJokeCategories() {
    const url = '/jokes/categories';
    return DEFAULT_API_INSTANCE.get(url);
  },

  getJokeById(id: string) {
    const url = `/jokes/search?query=${id}`;
    return DEFAULT_API_INSTANCE.get(url);
  },

  getRandomJokeByCategory(category: string) {
    const url = `/jokes/random?category=${category}`;
    return DEFAULT_API_INSTANCE.get(url);
  },
};

export default jokeApi;
