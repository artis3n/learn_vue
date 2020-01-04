import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-stock-trader-c0841.firebaseio.com/'
});

export const loadData = ({ commit }) => {
    instance.get('data.json')
        .then(response => {
            if (response.data) {
                const data = response.data;

                const portfolio = {
                    stockPortfolio: data.stockPortfolio,
                    funds: data.funds,
                    stocks: data.stocks,
                };

                commit('SET_STOCKS', data.stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
};
