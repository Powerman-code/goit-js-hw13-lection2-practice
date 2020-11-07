import './styles.css';
import NewsApiService from './news-service';
// console.log(NewsApiService);

// apiKey=4330ebfabc654a6992c2aa792f3173a3



// fetch('http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5', options)
//     .then(r => r.json())
//     .then(console.log);

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

// Создание news-service https://youtu.be/poxVZxvONF8?t=1959
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
// видео https://youtu.be/poxVZxvONF8?t=1293
// в ф-ях не надеемся на рефы, глобальные переменные, поскольку при модульном коде ф-я должна быть независимой https://youtu.be/poxVZxvONF8?t=1451
function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles();
    // const options = {
    //     headers: {
    //         Authorization: '4330ebfabc654a6992c2aa792f3173a3',
    //     },
    // };

    // const url =
    //     `http://newsapi.org/v2/everything?q=${searchQuerry}&language=en&pageSize=5`;

    // fetch(url, options)
    // .then(r => r.json())
    // .then(console.log);
};

// как догрузить информацию по запросу "показать еще?" https://youtu.be/poxVZxvONF8?t=1714

function onLoadMore(e) {
    newsApiService.fetchArticles();
    // const options = {
    //     headers: {
    //         Authorization: '4330ebfabc654a6992c2aa792f3173a3',
    //     },
    // };

    // const url =
    //     `http://newsapi.org/v2/everything?q=${searchQuerry}&language=en&pageSize=5`;

    // fetch(url, options)
    // .then(r => r.json())
    // .then(console.log);
};

// в отдельный файл выносим всю логику работы с API https://youtu.be/poxVZxvONF8?t=1821