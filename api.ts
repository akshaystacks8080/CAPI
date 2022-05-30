import axios from 'axios';

async function getExchanges(): Promise<any> {
    var config = {
        method: 'get',
        url: 'https://rest.coinapi.io/v1/exchanges',
        headers: {
            'X-CoinAPI-Key': 'ACCA1D04-E7C7-421F-B1ED-C83DEF3A61FC',
        },
    };

    const response = await axios(config);
    return response.data;
}
async function getAssets(): Promise<any> {
    var config = {
        method: 'get',
        url: 'https://rest.coinapi.io/v1/assets',
        headers: {
            'X-CoinAPI-Key': 'ACCA1D04-E7C7-421F-B1ED-C83DEF3A61FC',
        },
    };

    const response = await axios(config);
    return response.data;
}

export { getExchanges, getAssets };
