
export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchArticles() {
        // этот метод будет отвечать за http запросы
        console.log('до запроса', this);
        const options = {
            headers: {
                Authorization: '4330ebfabc654a6992c2aa792f3173a3',
            },
        };
        const url =
        `http://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
        // чтоб каждый раз, при нажатии на кнопку "показать еще" приходила новая страничка поиска, а не та же самая,
        // добавляем в конструктор свойство объекта this.page = 1; а значение page + 1 увеличиваем внутри  второго then
        // https://youtu.be/poxVZxvONF8?t=2305
        fetch(url, options)
        .then(r => r.json())
            .then(data => {
                this.incrementPage();
                console.log('после запросаб если все ок', this);
        });

    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.query;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}