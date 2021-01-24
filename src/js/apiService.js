// логика HTTP-запросов к API

export default {
  apiKey: '20010790-156a4c87fff49e11ab55c8bf9',
  BASE_URL: 'https://pixabay.com/api/',
  searchQuery: '',
  pageNumber: 1,
  perPage: 12,
  totalPages: 0,
  isLastPage: false,

  fetchImages() {
    return fetch(
      `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${this.apiKey}`
    )
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.pageNumber = 1;
  },
  incrementPage() {
    this.pageNumber += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  },
};
